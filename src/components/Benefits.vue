<template>
  <section class="bu-section bu-benefits-section" id="beneficios">
    <div class="container">
      <div class="row align-items-center gy-5">
        <div class="col-lg-6">
          <div class="bu-section-label">Por qué elegirnos</div>
          <div class="bu-divider"></div>
          <h2 class="bu-section-title">Una banca diseñada para <span>tu mundo</span></h2>
          
          <div class="d-flex flex-wrap gap-2 mt-4">
            <div v-for="b in benefits" :key="b.label" class="bu-benefit-pill">
              <service-icon :name="b.icon"></service-icon>
              <span>{{ b.label }}</span>
            </div>
          </div>
          
          <div class="mt-4">
            <button class="bu-btn-primary">Descargar la App</button>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="bu-mobile-image">
            <img src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800" alt="Mobile Banking">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'Benefits',
  components: {
    'service-icon': Vue.defineAsyncComponent(() => loadModule('./src/components/ServiceIcon.vue', window.loaderOptions))
  },
  data() {
    return {
      benefits: window.SITE_DATA.BENEFITS
    };
  }
};
</script>
