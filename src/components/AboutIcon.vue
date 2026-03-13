<template>
  <div v-html="svgIcon"></div>
</template>

<script>
module.exports = {
  name: 'AboutIcon',
  props: ['name'],
  computed: {
    svgIcon() {
      const icons = {
        'graduation-cap': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
        'handshake': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 18l-2-1-2 1V7l2 1 2-1v11z"/><path d="M3 12h1M21 12h-1M5 19l1-1M19 19l-1-1M5 5l1 1M19 5l-1 1"/></svg>',
        'shield-check': '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>'
      };
      return icons[this.name] || '';
    }
  }
};
</script>
