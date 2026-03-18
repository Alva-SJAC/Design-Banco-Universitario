<template>
  <div class="bu-fab-container" :class="{ active: isOpen }">
    <div class="bu-fab-menu" v-if="isOpen">
      <button class="bu-fab-item" @click="openAuth('login')">
        <span class="label">Banca en Línea</span>
        <div class="icon-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
        </div>
      </button>
      <button class="bu-fab-item" @click="openAuth('register')">
        <span class="label">Regístrate</span>
        <div class="icon-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
        </div>
      </button>
    </div>
    <button class="bu-fab-main" @click="isOpen = !isOpen">
      <span v-if="!isOpen">+</span>
      <span v-else>&times;</span>
    </button>
  </div>
</template>

<script>
module.exports = {
  name: 'FloatingBtn',
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openAuth(mode) {
      this.isOpen = false;
      this.$emit('open-auth', mode);
    }
  }
};
</script>

<style scoped>
.bu-fab-container { position: fixed; bottom: 25px; right: 25px; z-index: 1000; }
.bu-fab-main {
  width: 52px; height: 52px; border-radius: 50%; background: var(--bu-gradient);
  border: none; color: white; font-size: 24px; box-shadow: 0 5px 15px rgba(8,95,99,0.3);
  cursor: pointer; transition: transform 0.2s ease;
  display: flex; align-items: center; justify-content: center;
}
.bu-fab-main:hover { transform: scale(1.05); }
.bu-fab-menu { position: absolute; bottom: 62px; right: 0; display: flex; flex-direction: column; gap: 10px; }
.bu-fab-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer;
  padding: 0;
}
.bu-fab-item .label {
  background: white; padding: 6px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.12); color: var(--bu-navy);
  white-space: nowrap;
}
.bu-fab-item .icon-wrap {
  width: 42px; height: 42px; border-radius: 50%; background: white;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.12);
  color: var(--bu-teal);
}
</style>
