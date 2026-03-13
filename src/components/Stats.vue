<template>
  <section class="bu-stats-section bu-section-sm" ref="statsContainer">
    <div class="container">
      <div class="row text-center g-4">
        <div v-for="stat in stats" :key="stat.label" class="col-6 col-md-3">
          <div class="bu-stat-item">
            <div class="number">
              <span v-if="stat.prefix" class="prefix">{{ stat.prefix }}</span>
              {{ animatedValues[stat.label] || 0 }}
              <span class="suffix">{{ stat.suffix }}</span>
            </div>
            <div class="stat-label">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: 'Stats',
  data() {
    return {
      stats: window.SITE_DATA.STATS,
      animatedValues: {},
      hasAnimated: false
    };
  },
  mounted() {
    this.stats.forEach(s => {
      this.animatedValues[s.label] = 0;
    });

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.hasAnimated) {
        this.animateStats();
        this.hasAnimated = true;
      }
    }, { threshold: 0.5 });
    
    observer.observe(this.$refs.statsContainer);
  },
  methods: {
    animateStats() {
      this.stats.forEach(stat => {
        let current = 0;
        const target = stat.value;
        const increment = target / 50;
        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            this.animatedValues[stat.label] = target.toLocaleString();
            clearInterval(interval);
          } else {
            this.animatedValues[stat.label] = Math.floor(current).toLocaleString();
          }
        }, 30);
      });
    }
  }
};
</script>
