<template>
  <div v-if="isOpen" class="bu-modal-overlay" @click.self="closeModal">
    <div class="bu-modal-container animate-slide-up">
      <button class="bu-modal-close" @click="closeModal" type="button" aria-label="Cerrar modal">
        &times;
      </button>

      <div class="row g-0">
        <div class="col-lg-5 d-none d-lg-block">
          <div class="bu-modal-sidebar">
            <banco-logo :dark="true"></banco-logo>

            <div class="mt-5">
              <h3>{{ mode === 'login' ? 'Bienvenido de vuelta' : 'Únete a nosotros' }}</h3>
              <p class="bu-sidebar-text">
                {{
                  mode === 'login'
                    ? 'Accede a tu banca en línea de forma segura y gestiona tus finanzas universitarias.'
                    : 'Abre tu cuenta 100% digital en pocos minutos y disfruta de beneficios exclusivos.'
                }}
              </p>
            </div>

            <div class="mt-auto">
              <small class="bu-sidebar-small">Regulado por SUDEBAN</small>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="bu-modal-content">
            <div class="d-lg-none mb-4 text-center">
              <banco-logo></banco-logo>
            </div>

            <div class="bu-tabs mb-4">
              <button
                class="bu-tab"
                :class="{ active: mode === 'login' }"
                @click="switchMode('login')"
                type="button"
              >
                Ingresar
              </button>

              <button
                class="bu-tab"
                :class="{ active: mode === 'register' }"
                @click="switchMode('register')"
                type="button"
              >
                Registrarse
              </button>
            </div>

            <div v-if="!success">
              <form @submit.prevent="handleSubmit">
                <!-- Login Form -->
                <div v-if="mode === 'login'">
                  <div class="form-floating mb-3">
                    <input
                      type="text"
                      class="form-control"
                      id="loginUser"
                      placeholder="Usuario"
                      v-model="form.user"
                      required
                    />
                    <label for="loginUser">Usuario / Cédula</label>
                  </div>

                  <div class="form-floating mb-4">
                    <input
                      :type="showPass ? 'text' : 'password'"
                      class="form-control"
                      id="loginPass"
                      placeholder="Contraseña"
                      v-model="form.pass"
                      required
                    />
                    <label for="loginPass">Contraseña</label>

                    <button
                      type="button"
                      class="pass-toggle"
                      @click="showPass = !showPass"
                    >
                      {{ showPass ? 'Ocultar' : 'Mostrar' }}
                    </button>
                  </div>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="remember" />
                      <label class="form-check-label" for="remember">Recordar</label>
                    </div>

                    <a href="#" class="forgot-link">¿Olvidaste tu clave?</a>
                  </div>
                </div>

                <!-- Register Form -->
                <div v-if="mode === 'register'">
                  <div class="row g-2 mb-3">
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="registerName"
                          placeholder="Nombre"
                          v-model="form.name"
                          required
                        />
                        <label for="registerName">Nombre</label>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="form-floating">
                        <input
                          type="text"
                          class="form-control"
                          id="registerLastName"
                          placeholder="Apellido"
                          v-model="form.lastName"
                          required
                        />
                        <label for="registerLastName">Apellido</label>
                      </div>
                    </div>
                  </div>

                  <div class="form-floating mb-3">
                    <select
                      class="form-select"
                      id="registerUniversity"
                      v-model="form.university"
                      required
                    >
                      <option value="" disabled>Selecciona tu universidad</option>
                      <option v-for="u in universities" :key="u.value" :value="u.value">
                        {{ u.label }}
                      </option>
                    </select>
                    <label for="registerUniversity">Institución Universitaria</label>
                  </div>

                  <div class="form-floating mb-3">
                    <input
                      type="email"
                      class="form-control"
                      id="registerEmail"
                      placeholder="Email"
                      v-model="form.email"
                      required
                    />
                    <label for="registerEmail">Correo electrónico</label>
                  </div>
                </div>

                <button
                  type="submit"
                  class="bu-btn-primary w-100 py-3 mt-2"
                  :disabled="loading"
                >
                  {{ loading ? 'Procesando...' : (mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta') }}
                </button>
              </form>
            </div>

            <div v-else class="text-center py-5">
              <div class="success-icon">✓</div>
              <h4 class="mt-4">¡Operación exitosa!</h4>
              <p>Redirigiendo al portal bancario...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'AuthModal',
  props: ['isOpen', 'mode'],
  components: {
    'banco-logo': Vue.defineAsyncComponent(() =>
      loadModule('./src/components/BancoLogo.vue', window.loaderOptions)
    )
  },
  data() {
    return {
      showPass: false,
      loading: false,
      success: false,
      form: this.getEmptyForm(),
      universities: window.SITE_DATA.UNIVERSITIES
    };
  },
  watch: {
    mode() {
      this.resetState();
    },
    isOpen(newValue) {
      if (!newValue) {
        this.resetState();
      }
    }
  },
  methods: {
    getEmptyForm() {
      return {
        user: '',
        pass: '',
        name: '',
        lastName: '',
        email: '',
        university: ''
      };
    },
    resetState() {
      this.showPass = false;
      this.loading = false;
      this.success = false;
      this.form = this.getEmptyForm();
    },
    switchMode(mode) {
      this.$emit('switch-mode', mode);
    },
    closeModal() {
      this.resetState();
      this.$emit('close');
    },
    handleSubmit() {
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
        this.success = true;

        setTimeout(() => {
          this.closeModal();
        }, 2000);
      }, 1500);
    }
  }
};
</script>

<style scoped>
.bu-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3000;
}

.bu-modal-container {
  background: white;
  width: 95%;
  max-width: 900px;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.bu-modal-sidebar {
  background: var(--bu-gradient);
  padding: 3rem;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
}

.bu-sidebar-text {
  opacity: 0.7;
}

.bu-sidebar-small {
  opacity: 0.5;
}

.bu-modal-content {
  padding: 3rem;
}

.bu-modal-close {
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 2rem;
  line-height: 1;
  color: white;
  z-index: 10;
}

.bu-tabs {
  display: flex;
  border-bottom: 2px solid #eee;
}

.bu-tab {
  flex: 1;
  padding: 1rem;
  background: none;
  border: none;
  font-weight: 600;
  color: #aaa;
}

.bu-tab.active {
  color: var(--bu-teal);
  border-bottom: 2px solid var(--bu-teal);
  margin-bottom: -2px;
}

.pass-toggle {
  position: absolute;
  right: 15px;
  top: 18px;
  background: none;
  border: none;
  font-size: 0.75rem;
  color: var(--bu-teal);
  font-weight: 600;
}

.forgot-link {
  font-size: 0.85rem;
  text-decoration: none;
  color: var(--bu-teal);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: #eefffa;
  color: #4ec9c2;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin: 0 auto;
}
</style>