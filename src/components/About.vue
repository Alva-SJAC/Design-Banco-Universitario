<template>
  <section class="bu-section bu-about-section" id="nosotros">
    <div class="container">
      <div class="row align-items-center gy-5">
        <div class="col-lg-5">
          <div class="bu-about-image-wrapper">
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" alt="Nosotros">
            <div class="bu-about-badge">
              <div class="icon-wrap">
                <svg width="24" height="24" fill="white"><path d="M3 9L12 3L21 9V21H15V15H9V21H3V9Z"/></svg>
              </div>
              <div>
                <div class="value">+10 años</div>
                <div class="desc">de trayectoria</div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-7 ps-lg-5">
          <div class="bu-section-label">Quiénes Somos</div>
          <div class="bu-divider"></div>
          <h2 class="bu-section-title">Más que un banco, <span>tu aliado universitario</span></h2>
          <p class="mb-4">Entendemos las necesidades únicas de la comunidad académica venezolana y ofrecemos soluciones a la medida.</p>

          <div v-for="feat in features" :key="feat.title" class="bu-feature-item">
            <div class="bu-feature-icon">
              <about-icon :name="feat.icon"></about-icon>
            </div>
            <div class="bu-feature-text">
              <h5>{{ feat.title }}</h5>
              <p>{{ feat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'About',
  components: {
    'about-icon': Vue.defineAsyncComponent(() => loadModule('./src/components/AboutIcon.vue', window.loaderOptions))
  },
  data() {
    return {
      features: window.SITE_DATA.ABOUT_FEATURES
    };
  }
};
</script>
