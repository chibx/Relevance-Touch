<script setup>
import { navigateTo } from '#app';
import { computed, ref } from 'vue';

// Sample bands data
const bands = BANDS;

const selectedBand = ref('all');
const genres = ['Electronic Rock', 'Jazz Fusion', 'Synthwave', 'Hip-Hop'];

const filteredBands = computed(() => {
  if (selectedBand.value === 'all') {
    return bands;
  }
  return bands.filter(band => band.genre === selectedBand.value);
});

const navigateToBand = (id) => {
  navigateTo(`/bands/${id}`);
};
</script>


<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="bg-muted py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Bands</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Discover the collaborative groups and ensembles that create powerful musical experiences.
          Each band brings together talented musicians to create something greater than the sum of its parts.
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-wrap gap-4 justify-center">
          <button @click="selectedBand = 'all'" :class="[
            'px-6 py-2 rounded-full font-medium transition-colors',
            selectedBand === 'all'
              ? 'bg-primary '
              : 'bg-muted hover:bg-accent hover:text-accent-foreground'
          ]">
            All Bands
          </button>
          <button v-for="genre in genres" :key="genre" @click="selectedBand = genre" :class="[
            'px-6 py-2 cursor-pointer rounded-full font-medium transition-colors',
            selectedBand === genre.toLowerCase()
              ? 'bg-primary'
              : 'bg-muted hover:bg-accent hover:text-accent-foreground'
          ]">
            {{ genre }}
          </button>
        </div>
      </div>
    </section>

    <!-- Bands Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="band in filteredBands" :key="band.id" class="group cursor-pointer"
            @click="navigateToBand(band.id)">
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
                <div class="flex items-center justify-between text-sm ">
                  <div class="flex items-center space-x-4">
                    <span>{{ band.members }} members</span>
                    <span>•</span>
                    <span>{{ band.formed }}</span>
                  </div>
                  <div class="flex space-x-2">
                    <div v-if="band.social.instagram"
                      class="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <div v-if="band.social.spotify"
                      class="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                      <svg class="w-4 h-4 " fill="currentColor" viewBox="0 0 24 24">
                        <path
                          d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>