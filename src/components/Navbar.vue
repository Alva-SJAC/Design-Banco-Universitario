<template>
  <nav class="bu-navbar navbar navbar-expand-lg" :class="{ scrolled }">
    <div class="container">
      <a class="navbar-brand bu-navbar-brand" href="#inicio">
        <banco-logo></banco-logo>
      </a>

      <div class="collapse navbar-collapse d-none d-lg-flex">
        <ul class="navbar-nav ms-auto align-items-center gap-1">
          <li v-for="link in navLinks" :key="link.href" class="nav-item">
            <a class="nav-link bu-nav-link" :href="link.href">
              {{ link.label }}
            </a>
          </li>
        </ul>

        <div class="ms-3 d-flex gap-2">
          <button class="bu-btn-outline" @click="$emit('open-auth', 'login')">
            Banca en Línea
          </button>
          <button class="bu-btn-primary" @click="$emit('open-auth', 'register')">
            Registrarse
          </button>
        </div>
      </div>

      <button
        class="d-lg-none bu-menu-btn"
        @click="sidebarOpen = true"
        aria-label="Abrir menú"
        type="button"
      >
        <svg width="26" height="26" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Sidebar -->
  <div
    v-if="sidebarOpen"
    class="sidebar-overlay"
    @click="sidebarOpen = false"
  ></div>

  <div class="sidebar" :class="{ open: sidebarOpen }">
    <div class="sidebar-header">
      <banco-logo :dark="true"></banco-logo>
      <button @click="sidebarOpen = false" class="close-btn" type="button" aria-label="Cerrar menú">
        &times;
      </button>
    </div>

    <div class="sidebar-body">
      <div class="auth-box">
        <button class="bu-btn-primary w-100 mb-2" @click="openAuth('login')">
          Banca en Línea
        </button>
        <button class="bu-btn-outline w-100" @click="openAuth('register')">
          Registrarse
        </button>
      </div>

      <div class="nav-list mt-4">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          @click="sidebarOpen = false"
          class="nav-item-mobile"
        >
          {{ link.label }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
const { loadModule } = window['vue3-sfc-loader'];

module.exports = {
  name: 'Navbar',
  components: {
    'banco-logo': Vue.defineAsyncComponent(() =>
      loadModule('./src/assets/logo-no-background.pn', window.loaderOptions)
    )
  },
  data() {
    return {
      scrolled: false,
      sidebarOpen: false,
      navLinks: window.SITE_DATA.NAV_LINKS
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    openAuth(mode) {
      this.sidebarOpen = false;
      this.$emit('open-auth', mode);
    }
  }
};
</script>

<style scoped>
.bu-navbar-brand {
  text-decoration: none;
}

.bu-menu-btn {
  background: none;
  border: none;
  color: var(--bu-navy-deep);
  padding: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: white;
  z-index: 2000;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1999;
}

.sidebar-header {
  padding: 1.5rem;
  background: var(--bu-gradient);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  line-height: 1;
}

.sidebar-body {
  padding: 1.5rem;
  flex: 1;
}

.nav-item-mobile {
  display: block;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  text-decoration: none;
  color: var(--bu-text);
  font-weight: 500;
}
</style>