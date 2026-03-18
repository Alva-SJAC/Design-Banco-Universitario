<template>
  <div class="bu-logo" :class="{ dark }">
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
    }
  },
  computed: {
    logoSrc() {
      const fileName = this.dark ? 'logo-no-background.png' : 'logo-color.png';
      // Resolve paths relative to the current page so the logo loads correctly
      // even when the app is served from a subdirectory.
      return new URL(`src/assets/${fileName}`, window.location.href).href;
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
  height: 42px;
  width: auto;
  max-width: 220px;
  object-fit: contain;
}

@media (max-width: 768px) {
  .bu-logo-img {
    height: 36px;
    max-width: 190px;
  }
}
</style>