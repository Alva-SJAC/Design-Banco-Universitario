<template>
  <div style="font-family:'Montserrat Alternates', sans-serif">
    <navbar-component @open-auth="openAuth"></navbar-component>
    <hero-section></hero-section>
    <about-section></about-section>
    <stats-section></stats-section>
    <services-section></services-section>
    <benefits-section></benefits-section>
    <testimonials-section></testimonials-section>
    <cta-section></cta-section>
    <footer-section></footer-section>
    
    <floating-btn @open-auth="openAuth"></floating-btn>
    
    <auth-modal 
      :is-open="authModal.open" 
      :mode="authModal.mode" 
      @close="closeAuth" 
      @switch-mode="switchMode">
    </auth-modal>
  </div>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'App',
  components: {
    'navbar-component': Vue.defineAsyncComponent(() => loadModule('./src/components/Navbar.vue', window.loaderOptions)),
    'hero-section':      Vue.defineAsyncComponent(() => loadModule('./src/components/Hero.vue', window.loaderOptions)),
    'about-section':     Vue.defineAsyncComponent(() => loadModule('./src/components/About.vue', window.loaderOptions)),
    'stats-section':     Vue.defineAsyncComponent(() => loadModule('./src/components/Stats.vue', window.loaderOptions)),
    'services-section':  Vue.defineAsyncComponent(() => loadModule('./src/components/Services.vue', window.loaderOptions)),
    'benefits-section':  Vue.defineAsyncComponent(() => loadModule('./src/components/Benefits.vue', window.loaderOptions)),
    'testimonials-section': Vue.defineAsyncComponent(() => loadModule('./src/components/Testimonials.vue', window.loaderOptions)),
    'cta-section':       Vue.defineAsyncComponent(() => loadModule('./src/components/CTA.vue', window.loaderOptions)),
    'footer-section':    Vue.defineAsyncComponent(() => loadModule('./src/components/Footer.vue', window.loaderOptions)),
    'floating-btn':      Vue.defineAsyncComponent(() => loadModule('./src/components/FloatingBtn.vue', window.loaderOptions)),
    'auth-modal':        Vue.defineAsyncComponent(() => loadModule('./src/components/AuthModal.vue', window.loaderOptions)),
  },
  data() {
    return {
      authModal: {
        open: false,
        mode: 'login'
      }
    };
  },
  methods: {
    openAuth(mode) {
      this.authModal.open = true;
      this.authModal.mode = mode;
    },
    closeAuth() {
      this.authModal.open = false;
    },
    switchMode(mode) {
      this.authModal.mode = mode;
    }
  }
};
</script>
