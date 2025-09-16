<script setup>
import { navigateTo, useHead } from '#app';
import { computed, ref } from 'vue';

// Sample artists data
const allArtists = [
  {
    id: 1,
    name: "Sarah Chen",
    genre: "Pop/R&B",
    experience: "8 years",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=400&width=400",
    description: "Multi-platinum recording artist with a soulful voice and contemporary style that has captivated audiences worldwide."
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    genre: "Hip-Hop/Rap",
    experience: "6 years",
    location: "Atlanta, GA",
    image: "/placeholder.svg?height=400&width=400",
    description: "Award-winning rapper and producer known for innovative beats and socially conscious lyrics."
  },
  {
    id: 3,
    name: "Luna Park",
    genre: "Indie/Alternative",
    experience: "5 years",
    location: "Portland, OR",
    image: "/placeholder.svg?height=400&width=400",
    description: "Singer-songwriter creating atmospheric indie music with electronic elements and introspective lyrics."
  },
  {
    id: 4,
    name: "Alex Rivera",
    genre: "Electronic",
    experience: "7 years",
    location: "Miami, FL",
    image: "/placeholder.svg?height=400&width=400",
    description: "Electronic music producer and DJ specializing in progressive house and ambient soundscapes."
  },
  {
    id: 5,
    name: "Emma Thompson",
    genre: "Folk",
    experience: "4 years",
    location: "Nashville, TN",
    image: "/placeholder.svg?height=400&width=400",
    description: "Folk singer-songwriter with a powerful voice and storytelling ability rooted in traditional American music."
  },
  {
    id: 6,
    name: "Jordan Kim",
    genre: "Jazz",
    experience: "10 years",
    location: "New York, NY",
    image: "/placeholder.svg?height=400&width=400",
    description: "Accomplished jazz pianist and composer known for innovative arrangements and collaborative performances."
  }
];

// Reactive state
const selectedGenre = ref('all');
const searchQuery = ref('');

// Computed properties
const genres = computed(() => [...new Set(allArtists.map(artist => artist.genre))]);

const filteredArtists = computed(() => {
  let filtered = allArtists;

  if (selectedGenre.value !== 'all') {
    filtered = filtered.filter(artist => artist.genre === selectedGenre.value);
  }

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(artist =>
      artist.name.toLowerCase().includes(query) ||
      artist.genre.toLowerCase().includes(query) ||
      artist.location.toLowerCase().includes(query)
    );
  }

  return filtered;
});

// Methods
const navigateToArtist = (artistId) => {
  navigateTo(`/artists/${artistId}`);
};

// SEO - moved to top level
useHead({
  title: 'Artists - Creative Studio',
  meta: [
    { name: 'description', content: 'Meet our talented roster of artists spanning multiple genres including Pop, R&B, Hip-Hop, Electronic, Folk, and Jazz.' }
  ]
});
</script>

<template>
  <div class="min-h-screen">
    <!-- Header Section -->
    <section class="bg-muted py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Artists</h1>
        <p class="text-xl max-w-3xl mx-auto">
          Meet the talented individuals who bring our creative vision to life.
          Each artist brings their unique style and perspective to create extraordinary musical experiences.
        </p>
      </div>
    </section>

    <!-- Filters Section -->
    <section class="py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row gap-6 items-center justify-between">
          <!-- Genre Filter -->
          <div class="flex flex-wrap gap-3">
            <button @click="selectedGenre = 'all'" :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedGenre === 'all'
                ? 'bg-primary '
                : 'bg-muted hover:bg-accent hover:text-accent-foreground'
            ]">
              All Genres
            </button>
            <button v-for="genre in genres" :key="genre" @click="selectedGenre = genre" :class="[
              'px-4 py-2 rounded-lg font-medium transition-colors',
              selectedGenre === genre
                ? 'bg-primary '
                : 'bg-muted hover:bg-accent hover:text-accent-foreground'
            ]">
              {{ genre }}
            </button>
          </div>

          <!-- Search -->
          <div class="relative">
            <input v-model="searchQuery" type="text" placeholder="Search artists..."
              class="pl-10 pr-4 py-2 w-64 border border-b rounded-lg bg-input placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
            <svg class="absolute left-3 top-2.5 w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Artists Grid -->
    <section class="py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="artist in filteredArtists" :key="artist.id" class="group cursor-pointer"
            @click="navigateToArtist(artist.id)">
            <div
              class="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
              <div class="aspect-square overflow-hidden">
                <img :src="artist.image" :alt="artist.name"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">{{ artist.name }}</h3>
                <p class="text-accent font-medium mb-2">{{ artist.genre }}</p>
                <p class="text-sm mb-3">{{ artist.description }}</p>
                <div class="flex items-center justify-between text-sm ">
                  <span>{{ artist.experience }}</span>
                  <span>{{ artist.location }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Results -->
        <div v-if="filteredArtists.length === 0" class="text-center py-16">
          <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
          <h3 class="text-xl font-semibold mb-2">No artists found</h3>
          <p>Try adjusting your search or filter criteria.</p>
        </div>
      </div>
    </section>
  </div>
</template>
