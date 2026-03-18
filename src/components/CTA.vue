<template>
  <section class="bu-section bu-cta-section" id="contacto">
    <div class="container">
      <div class="bu-cta-card">
        <div class="row align-items-center gy-5">
          <div class="col-lg-7">
            <h2 class="bu-cta-title">Abre tu cuenta <span>100% digital</span> hoy mismo</h2>
            <p class="bu-cta-text mb-4">Sin filas, sin papeleo excesivo. Solo tu carnet universitario y muchas ganas de crecer.</p>
            
            <div class="bu-cta-steps">
              <div v-for="step in steps" :key="step.step" class="bu-cta-step">
                <div class="bu-step-num">{{ step.step }}</div>
                <div class="bu-step-text">{{ step.text }}</div>
              </div>
            </div>

            <div class="mt-5 d-flex gap-3">
              <button class="bu-btn-white">Abrir Cuenta</button>
              <button class="bu-btn-outline" style="color: white; border-color: white">Ver Tutorial</button>
            </div>
          </div>

          <div class="col-lg-5">
            <div class="bu-contact-form">
              <h4>¿Tienes dudas?</h4>
              <p>Déjanos tus datos y te contactaremos.</p>
              <form @submit.prevent="submitForm">
                <input type="text" class="form-control mb-3" placeholder="Nombre completo" v-model="form.name" required>
                <input type="email" class="form-control mb-3" placeholder="Correo electrónico" v-model="form.email" required>
                <textarea class="form-control mb-3" rows="3" placeholder="Tu mensaje" v-model="form.message"></textarea>
                <button type="submit" class="bu-btn-primary w-100" :disabled="loading">
                  {{ loading ? 'Enviando...' : 'Enviar mensaje' }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: 'CTA',
  data() {
    return {
      steps: window.SITE_DATA.CTA_STEPS,
      form: { name: '', email: '', message: '' },
      loading: false
    };
  },
  methods: {
    submitForm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        alert('Gracias por tu mensaje. El equipo del Banco Universitario te contactará pronto.');
        this.form = { name: '', email: '', message: '' };
      }, 1500);
    }
  }
};
</script>
