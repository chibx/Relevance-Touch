<script setup>
import { useHead } from '#app';

useHead({
  title: 'About Us - Creative Studio',
  meta: [
    { name: 'description', content: 'Learn about our creative studio\'s mission, values, and team. Discover our comprehensive services including music video production, photography, and live recording.' }
  ]
});
</script>


<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="overflow-hidden">
      <AboutIntro />
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <AboutStory />
    </section>

    <!-- Mission & Values Section -->
    <section class="py-20 bg-gray-50">
      <AboutMission />
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <AboutMembers />
    </section>

    <!-- Stats Section -->
    <section class="py-20">
      <AboutStats />
    </section>

    <!-- Services Section -->
    <section class="py-20">
      <AboutServices />
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-muted">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="poppins text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Creative Journey?
        </h2>
        <p class="text-xl mb-8">
          Let's collaborate and bring your artistic vision to life. Get in touch with our team today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:relevancetouch@gmail.com"
            class="hover:bg-black hover:text-white border px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get In Touch
          </a>
          <NuxtLink to="/works"
            class="hover:bg-black hover:text-white border px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            View Our Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>


<style scoped>
section:nth-child(2) {
  background-color: #fffbeb;
}

section:nth-child(3) {
  background-color: #fafafa;
}

section:nth-child(6) {
  background-color: #fffef5;
}
</style>