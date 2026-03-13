<template>
  <section class="bu-section bu-testimonials-section">
    <div class="container">
      <div class="text-center mb-5">
        <div class="bu-section-label">Testimonios</div>
        <div class="bu-divider bu-divider-center"></div>
        <h2 class="bu-section-title">Lo que dice nuestra <span>comunidad</span></h2>
      </div>

      <div class="row g-4">
        <div v-for="t in testimonials" :key="t.name" class="col-md-4">
          <div class="bu-testimonial-card">
            <div class="bu-stars">★★★★★</div>
            <p class="bu-testimonial-text">"{{ t.text }}"</p>
            <div class="bu-testimonial-author">
              <div class="bu-testimonial-avatar">{{ t.initial }}</div>
              <div class="bu-testimonial-author-info">
                <div class="name">{{ t.name }}</div>
                <div class="role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
module.exports = {
  name: 'Testimonials',
  data() {
    return {
      testimonials: window.SITE_DATA.TESTIMONIALS
    };
  }
};
</script>
