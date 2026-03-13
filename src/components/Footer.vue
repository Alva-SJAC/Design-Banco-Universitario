<template>
  <footer class="bu-footer">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-4">
          <banco-logo :dark="true"></banco-logo>
          <p class="mt-4" style="color: rgba(255,255,255,0.6); max-width: 300px;">
            Impulsando el futuro académico de Venezuela con soluciones financieras transparentes y digitales.
          </p>
          <div class="d-flex gap-3 mt-4">
            <div v-for="i in 4" :key="i" class="bu-social-icon"></div>
          </div>
        </div>

        <div class="col-6 col-lg-2">
          <h6>Productos</h6>
          <ul class="bu-footer-links">
            <li v-for="p in products" :key="p"><a href="#">{{ p }}</a></li>
          </ul>
        </div>

        <div class="col-6 col-lg-2">
          <h6>Institución</h6>
          <ul class="bu-footer-links">
            <li v-for="i in institution" :key="i"><a href="#">{{ i }}</a></li>
          </ul>
        </div>

        <div class="col-lg-4">
          <h6>Descarga nuestra App</h6>
          <p style="font-size: 0.9rem; color: rgba(255,255,255,0.6);">Lleva tu banco a todas partes con nuestra aplicación móvil disponible en Android e iOS.</p>
          <div class="d-flex gap-2 mt-3">
            <div class="bu-app-badge">App Store</div>
            <div class="bu-app-badge">Google Play</div>
          </div>
        </div>
      </div>

      <div class="bu-footer-bottom">
        <div class="d-md-flex justify-content-between align-items-center">
          <p class="mb-0">© 2024 Banco Universitario. Todo los derechos reservados.</p>
          <div class="d-flex gap-4 mt-3 mt-md-0">
            <a href="#">Privacidad</a>
            <a href="#">Términos</a>
            <a href="#">Sudeban</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'Footer',
  components: {
    'banco-logo': Vue.defineAsyncComponent(() => loadModule('./src/components/BancoLogo.vue', window.loaderOptions))
  },
  data() {
    return {
      products: window.SITE_DATA.FOOTER_PRODUCTS,
      institution: window.SITE_DATA.FOOTER_INSTITUTION
    };
  }
};
</script>
