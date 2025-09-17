<script setup>
import { useHead } from '#app';

// Sample data
const featuredArtists = populateRandom(ARTISTS, 3)

const featuredBands = populateRandom(BANDS, 2);

const latestWorks = populateRandom(WORKS, 4);

// SEO
useHead({
  title: 'Creative Studio - Where Creativity Meets Excellence',
  meta: [
    { name: 'description', content: 'Professional creative studio showcasing world-class artists, bands, and multimedia productions. Discover talented musicians and stunning visual works.' }
  ]
});
</script>


<template>
  <div>
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <!-- <img src="/placeholder.svg?height=1080&width=1920" alt="Studio background" class="w-full h-full object-cover" /> -->
        <img src="/studio.webp" alt="Studio background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Where <span class="text-accent">Creativity</span> Meets Excellence
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-pretty max-w-3xl mx-auto opacity-90">
          Professional creative studio showcasing world-class artists, bands, and multimedia productions
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/works"
            class="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            View Our Works
          </NuxtLink>
          <NuxtLink to="/artists"
            class="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-colors backdrop-blur-sm">
            Meet Our Artists
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Artists Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Artists</h2>
          <p class="text-xl max-w-2xl mx-auto">
            Discover the talented individuals who bring our creative vision to life
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="artist in featuredArtists" :key="artist.id" class="group cursor-pointer">
            <div
              class="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
              <div class="aspect-square overflow-hidden">
                <img :src="artist.image" :alt="artist.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-1">{{ artist.name }}</h3>
                <p class="mb-3">{{ artist.genre }}</p>
                <p class="text-sm ">{{ artist.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/artists"
            class="bg-white text-black shadow-lg shadow-black/30 hover:shadow-md transition-shadow rounded-xl px-8 py-5 font-semibold">
            View All Artists
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Bands Section -->
    <section class="py-20 bg-muted">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Featured Bands</h2>
          <p class="text-xl max-w-2xl mx-auto">
            Collaborative groups creating powerful musical experiences
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="band in featuredBands" :key="band.id" class="group cursor-pointer">
            <div
              class="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
              <div class="aspect-video overflow-hidden">
                <img :src="band.image" :alt="band.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="p-6">
                <h3 class="text-2xl font-semibold mb-2">{{ band.name }}</h3>
                <p class="text-accent font-medium mb-3">{{ band.genre }}</p>
                <p class="mb-4">{{ band.description }}</p>
                <div class="flex items-center text-sm ">
                  <span>{{ band.members }} members</span>
                  <span class="mx-2">•</span>
                  <span>{{ band.formed }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/bands"
            class="bg-white text-black shadow-lg shadow-black/30 hover:shadow-md transition-shadow  px-8 py-5 rounded-xl font-semibold">
            View All Bands
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Multimedia Showcase Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Latest Works</h2>
          <p class="text-xl max-w-2xl mx-auto">
            Explore our recent video productions and photography
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="work in latestWorks" :key="work.id" class="group cursor-pointer">
            <div class="relative overflow-hidden rounded-xl aspect-video bg-card">
              <img :src="work.thumbnail" :alt="work.title"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-sm font-medium">
                  {{ work.type }}
                </span>
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 class="text-white font-semibold mb-1">{{ work.title }}</h3>
                <p class="text-white/80 text-sm">{{ work.artist }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/works"
            class="bg-white text-black shadow-lg shadow-black/30 hover:shadow-md transition-shadow  px-8 py-5 rounded-xl font-semibold">
            View All Works
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="py-20">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Create Something Amazing?
        </h2>
        <p class="text-xl mb-8">
          Join our community of talented artists and bring your creative vision to life
        </p>
        <NuxtLink to="/about"
          class="border hover:bg-black hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
          Get In Touch
        </NuxtLink>
      </div>
    </section>
  </div>
</template>