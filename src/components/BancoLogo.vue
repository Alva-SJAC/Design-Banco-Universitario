<template>
  <div style="display:flex;align-items:center;gap:0.5rem;text-decoration:none">
    <div :style="iconWrapStyle">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 9L12 3L21 9V21H15V15H9V21H3V9Z" fill="white" opacity="0.9"/>
        <rect x="9" y="15" width="6" height="6" fill="white" opacity="0.6"/>
      </svg>
    </div>
    <div style="line-height:1.1">
      <div :style="nameStyle">Banco Universitario</div>
      <div :style="taglineStyle">Tu banco académico</div>
    </div>
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
    iconWrapStyle() {
      return {
        width: '38px',
        height: '38px',
        borderRadius: '10px',
        background: 'linear-gradient(135deg, #4EC9C2 0%, #1A6B7C 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0
      };
    },
    nameStyle() {
      return {
        fontWeight: 700,
        fontSize: '0.95rem',
        color: this.dark ? '#ffffff' : '#0f4a58',
        letterSpacing: '-0.01em'
      };
    },
    taglineStyle() {
      return {
        fontWeight: 500,
        fontSize: '0.62rem',
        color: this.dark ? 'rgba(255,255,255,0.6)' : '#4EC9C2',
        letterSpacing: '0.12em',
        textTransform: 'uppercase'
      };
    }
  }
};
</script>
