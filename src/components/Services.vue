<template>
  <section class="bu-section bu-services-section" id="productos">
    <div class="container">
      <div class="text-center mb-5">
        <div class="bu-section-label">Productos y Servicios</div>
        <div class="bu-divider bu-divider-center"></div>
        <h2 class="bu-section-title">Soluciones financieras para <span>cada etapa</span></h2>
      </div>

      <div class="row g-4">
        <div v-for="service in services" :key="service.title" class="col-md-6 col-lg-4">
          <div class="bu-service-card">
            <div class="bu-service-icon">
              <service-icon :name="service.icon"></service-icon>
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.description }}</p>
            <ul class="bu-service-features">
              <li v-for="f in service.features" :key="f">
                <span class="bu-feature-check">✓</span> {{ f }}
              </li>
            </ul>
            <a href="#contacto" class="bu-service-link">Solicitar ahora &rarr;</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'Services',
  components: {
    'service-icon': Vue.defineAsyncComponent(() => loadModule('./src/components/ServiceIcon.vue', window.loaderOptions))
  },
  data() {
    return {
      services: window.SITE_DATA.SERVICES
    };
  }
};
</script>
