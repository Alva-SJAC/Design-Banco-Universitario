<template>
  <section class="bu-hero" id="inicio">
    <div class="bu-hero-bg"></div>
    <div class="bu-hero-overlay"></div>

    <div class="container bu-hero-content">
      <div class="row align-items-center gy-5">
        <div class="col-lg-6">
          <div class="bu-hero-badge">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            Banco creado para ti
          </div>

          <h1 class="bu-hero-title">
            Finanzas inteligentes para la <span>comunidad universitaria</span>
          </h1>

          <p class="bu-hero-subtitle">
            Banco Universitario nace para acompañar a estudiantes, docentes y personal académico en cada etapa de su vida financiera.
          </p>

          <div class="d-flex flex-wrap gap-3">
            <a href="#productos" class="bu-btn-white">
              Explorar Productos
            </a>

            <a href="#nosotros" class="bu-btn-outline bu-btn-hero-outline">
              Conocer Más
            </a>
          </div>

          <div class="d-flex align-items-center gap-4 mt-4 flex-wrap">
            <div
              v-for="item in trustItems"
              :key="item"
              class="d-flex align-items-center gap-2"
            >
              <svg
                class="bu-trust-icon"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="3"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>

              <span class="bu-trust-text">{{ item }}</span>
            </div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="bu-hero-image-container animate-float">
            <div class="bu-hero-card">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800"
                alt="Estudiantes universitarios compartiendo en el campus"
              />
            </div>

            <div class="bu-hero-stats-bar">
              <div
                v-for="stat in heroStats"
                :key="stat.label"
                class="bu-hero-stat"
              >
                <div class="value">{{ stat.value }}</div>
                <span class="label">{{ stat.label }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bu-hero-scroll">
      <div class="bu-scroll-dot"></div>
      <span>Scroll</span>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: 'Hero',
  data() {
    return {
      heroStats: window.SITE_DATA.HERO_STATS,
      trustItems: window.SITE_DATA.TRUST_ITEMS
    };
  }
};
</script>

<style scoped>
.bu-btn-hero-outline {
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.bu-trust-icon {
  color: #4EC9C2;
  flex-shrink: 0;
}

.bu-trust-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}
</style>