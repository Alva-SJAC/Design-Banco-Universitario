<template>
  <div class="bu-fab-container" :class="{ active: isOpen }">
    <div class="bu-fab-menu" v-if="isOpen">
      <button class="bu-fab-item" @click="openAuth('login')">
        <span class="label">Banca en Línea</span>
        <div class="icon-wrap">🔒</div>
      </button>
      <button class="bu-fab-item" @click="openAuth('register')">
        <span class="label">Regístrate</span>
        <div class="icon-wrap">📝</div>
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
.bu-fab-container { position: fixed; bottom: 30px; right: 30px; z-index: 1000; }
.bu-fab-main {
  width: 60px; height: 60px; border-radius: 50%; background: var(--bu-gradient);
  border: none; color: white; font-size: 24px; box-shadow: 0 5px 15px rgba(15,74,88,0.4);
}
.bu-fab-menu { position: absolute; bottom: 70px; right: 0; display: flex; flex-direction: column; gap: 15px; }
.bu-fab-item {
  display: flex; align-items: center; gap: 10px; background: none; border: none; cursor: pointer;
}
.bu-fab-item .label {
  background: white; padding: 5px 12px; border-radius: 8px; font-size: 0.85rem; font-weight: 600;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1); color: var(--bu-navy);
}
.bu-fab-item .icon-wrap {
  width: 45px; height: 45px; border-radius: 50%; background: white;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}
</style>
