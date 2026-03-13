<template>
  <div class="bu-logo-container">
    <img 
      :src="logoPath" 
      alt="Banco Universitario Logo" 
      :style="logoStyle"
    >
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
    footer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    logoPath() {
      // Usamos el logo oficial del kit de diseño
      return './src/assets/logo-no-background.png';
    },
    logoStyle() {
      const styles = {
        height: this.footer ? '65px' : '48px',
        width: 'auto',
        display: 'block',
        objectFit: 'contain'
      };
      
      // Si estamos en un fondo oscuro (dark: true), aplicamos un filtro para que se vea blanco/claro
      if (this.dark) {
        styles.filter = 'brightness(0) invert(1)';
        styles.opacity = '0.9';
      }
      
      return styles;
    }
  }
};
</script>

<style scoped>
.bu-logo-container {
  display: flex;
  align-items: center;
}
</style>
