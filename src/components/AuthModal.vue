<template>
  <div v-if="isOpen" class="bu-modal-overlay" @click.self="$emit('close')">
    <div class="bu-modal-container animate-slide-up">
      <button class="bu-modal-close" @click="$emit('close')">&times;</button>
      
      <div class="row g-0">
        <div class="col-lg-5 d-none d-lg-block">
          <div class="bu-modal-sidebar">
            <div class="mb-4">
              <banco-logo :dark="true" style="max-width: 180px;"></banco-logo>
            </div>
            <div class="mt-4">
              <h3>{{ mode === 'login' ? 'Bienvenido de vuelta' : 'Únete a nosotros' }}</h3>
              <p style="opacity: 0.7;">
                {{ mode === 'login' 
                  ? 'Accede a tu banca en línea de forma segura y gestiona tus finanzas universitarias.' 
                  : 'Abre tu cuenta 100% digital en pocos minutos y disfruta de beneficios exclusivos.' 
                }}
              </p>
            </div>
            <div class="mt-auto">
              <small style="opacity: 0.5;">Regulado por SUDEBAN</small>
            </div>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="bu-modal-content">
            <div class="d-lg-none mb-4 text-center">
              <banco-logo></banco-logo>
            </div>

            <div class="bu-tabs mb-4">
              <button class="bu-tab" :class="{ active: mode === 'login' }" @click="$emit('switch-mode', 'login')">Ingresar</button>
              <button class="bu-tab" :class="{ active: mode === 'register' }" @click="$emit('switch-mode', 'register')">Registrarse</button>
            </div>

            <div v-if="!success">
              <form @submit.prevent="handleSubmit">
                <!-- Login Form -->
                <div v-if="mode === 'login'">
                  <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="loginUser" placeholder="Usuario" v-model="form.user" required>
                    <label for="loginUser">Usuario / Cédula</label>
                  </div>
                  <div class="form-floating mb-4">
                    <input :type="showPass ? 'text' : 'password'" class="form-control" id="loginPass" placeholder="Contraseña" v-model="form.pass" required>
                    <label for="loginPass">Contraseña</label>
                    <button type="button" class="pass-toggle" @click="showPass = !showPass">
                      {{ showPass ? 'Ocultar' : 'Mostrar' }}
                    </button>
                  </div>
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="remember">
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
                        <input type="text" class="form-control" placeholder="Nombre" v-model="form.name" required>
                        <label>Nombre</label>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-floating">
                        <input type="text" class="form-control" placeholder="Apellido" v-model="form.lastName" required>
                        <label>Apellido</label>
                      </div>
                    </div>
                  </div>
                  <div class="form-floating mb-3">
                    <select class="form-select" v-model="form.university" required>
                      <option value="" disabled>Selecciona tu universidad</option>
                      <option v-for="u in universities" :key="u.value" :value="u.value">{{ u.label }}</option>
                    </select>
                    <label>Institución Universitaria</label>
                  </div>
                  <div class="form-floating mb-3">
                    <input type="email" class="form-control" placeholder="Email" v-model="form.email" required>
                    <label>Correo electrónico</label>
                  </div>
                </div>

                <button type="submit" class="bu-btn-primary w-100 py-3 mt-2" :disabled="loading">
                  {{ loading ? 'Procesando...' : (mode === 'login' ? 'Iniciar Sesión' : 'Crear Cuenta') }}
                </button>
              </form>
            </div>

            <div v-else class="text-center py-5">
              <div class="success-icon animate-bounce">✓</div>
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
    'banco-logo': Vue.defineAsyncComponent(() => loadModule('./src/components/BancoLogo.vue', window.loaderOptions))
  },
  data() {
    return {
      showPass: false,
      loading: false,
      success: false,
      form: { user: '', pass: '', name: '', lastName: '', email: '', university: '' },
      universities: window.SITE_DATA.UNIVERSITIES
    };
  },
  methods: {
    handleSubmit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.$emit('close');
        }, 2000);
      }, 1500);
    }
  }
};
</script>

<style scoped>
.bu-modal-overlay {
  position: fixed; inset: 0; background: rgba(0,0,0,0.6);
  backdrop-filter: blur(5px); display: flex; align-items: center; justify-content: center; z-index: 3000;
}
.bu-modal-container {
  background: white; width: 95%; max-width: 900px; border-radius: 20px;
  overflow: hidden; position: relative; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);
}
.bu-modal-sidebar {
  background: var(--bu-gradient); padding: 3.5rem 2.8rem; height: 100%; color: white;
  display: flex; flex-direction: column;
}
.bu-modal-content { padding: 3rem; }
.bu-tabs { display: flex; border-bottom: 2px solid #eee; }
.bu-tab {
  flex: 1; padding: 1rem; background: none; border: none; font-weight: 600; color: #aaa;
}
.bu-tab.active { color: var(--bu-teal); border-bottom: 2px solid var(--bu-teal); margin-bottom: -2px; }
.pass-toggle {
  position: absolute; right: 15px; top: 18px; background: none; border: none;
  font-size: 0.75rem; color: var(--bu-teal); font-weight: 600;
}
.success-icon {
  width: 80px; height: 80px; background: #eefffa; color: #4EC9C2; font-size: 2.5rem;
  display: flex; align-items: center; justify-content: center; border-radius: 50%; margin: 0 auto;
}
</style>
