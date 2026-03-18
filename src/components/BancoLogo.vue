<template>
  <div class="bu-logo" :class="{ dark, navbar: isNavbar }">
    <img
      :src="logoSrc"
      alt="Banco Universitario"
      class="bu-logo-img"
    />
  </div>
</template>

<script>
module.exports = {
  name: 'BancoLogo',
  props: {
    dark: {
      type: Boolean,
      default: false
    },
    isNavbar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logoSrc() {
      if (this.isNavbar) {
        return './Diseno/logo-no-background.png';
      }

      return this.dark
        ? './Diseno/logo-no-background.png'
        : './Diseno/logo-color.png';
    }
  }
};
</script>

<style scoped>
.bu-logo {
  display: inline-flex;
  align-items: center;
}

.bu-logo-img {
  display: block;
  height: 60px;
  width: auto;
  max-width: 300px;
  object-fit: contain;
}

/* solo navbar */
.bu-logo.navbar .bu-logo-img {
  height: 42px;
  max-width: 220px;
}

@media (max-width: 768px) {
  .bu-logo-img {
    height: 40px;
    max-width: 220px;
  }

  .bu-logo.navbar .bu-logo-img {
    height: 40px;
    max-width: 200px;
  }
}
</style>