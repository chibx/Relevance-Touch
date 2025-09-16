<script setup>
import { useHead, useRoute } from '#app';

const route = useRoute();
const artistId = parseInt(route.params.id);

const artistsData = {
  1: {
    id: 1,
    name: "Sarah Chen",
    genre: "Pop/R&B",
    experience: "8 years",
    location: "Los Angeles, CA",
    image: "/placeholder.svg?height=400&width=400",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Sarah Chen is a multi-platinum recording artist whose soulful voice and contemporary style have captivated audiences worldwide. With over 8 years in the industry, she has established herself as one of the most versatile and dynamic performers of her generation.",
    journey: "Starting her career as a backup vocalist, Sarah quickly rose through the ranks with her powerful voice and magnetic stage presence. Her debut album 'Midnight Dreams' topped the charts and earned her multiple Grammy nominations, setting the stage for a remarkable career that continues to evolve.",
    achievements: [
      "3x Grammy Award Winner",
      "Multi-platinum selling artist",
      "Billboard Music Award for Best R&B Artist",
      "Over 50 million streams worldwide",
      "Headlined major festivals including Coachella and Lollapalooza"
    ],
    social: { instagram: true, spotify: true },
    works: [
      {
        id: 1,
        title: "Neon Dreams",
        type: "Music Video",
        year: "2024",
        thumbnail: "/placeholder.svg?height=300&width=400"
      },
      {
        id: 2,
        title: "Studio Sessions",
        type: "Photography",
        year: "2023",
        thumbnail: "/placeholder.svg?height=300&width=400"
      }
    ]
  }
};

const artist = artistsData[artistId] || null;

useHead({
  title: artist ? `${artist.name} - Creative Studio` : 'Artist Not Found - Creative Studio',
  meta: [
    { name: 'description', content: artist ? `Learn more about ${artist.name}, ${artist.genre} artist with ${artist.experience} of experience.` : 'Artist not found.' }
  ]
});
</script>

<template>
  <div class="min-h-screen">
    <template v-if="artist">
      <section class="relative h-96 md:h-[500px] overflow-hidden">
        <img :src="artist.heroImage" :alt="artist.name" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">{{ artist.name }}</h1>
            <p class="text-xl md:text-2xl text-white/90">{{ artist.genre }}</p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <div class="prose prose-lg max-w-none">
                <h2 class="text-3xl font-bold mb-6">About {{ artist.name }}</h2>
                <p class="leading-relaxed mb-6">{{ artist.bio }}</p>

                <h3 class="text-2xl font-bold mb-4">Musical Journey</h3>
                <p class="leading-relaxed mb-6">{{ artist.journey }}</p>

                <h3 class="text-2xl font-bold mb-4">Achievements</h3>
                <ul class="space-y-2">
                  <li v-for="achievement in artist.achievements" :key="achievement">
                    • {{ achievement }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="lg:col-span-1">
              <div class="bg-card rounded-xl p-6 mb-8">
                <img :src="artist.image" :alt="artist.name" class="w-full aspect-square object-cover rounded-lg mb-6" />

                <div class="space-y-4">
                  <div>
                    <h4 class="font-semibold mb-2">Genre</h4>
                    <p>{{ artist.genre }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Experience</h4>
                    <p>{{ artist.experience }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Location</h4>
                    <p>{{ artist.location }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Follow</h4>
                    <div class="flex space-x-3">
                      <a v-if="artist.social.instagram" href="#"
                        class="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a v-if="artist.social.spotify" href="#"
                        class="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 bg-muted">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold mb-8">Featured Works</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div v-for="work in artist.works" :key="work.id" class="group cursor-pointer">
              <div class="relative overflow-hidden rounded-xl aspect-video bg-card">
                <img :src="work.thumbnail" :alt="work.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 rounded-full text-sm font-medium">
                    {{ work.type }}
                  </span>
                </div>
                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 class="text-white font-semibold mb-1">{{ work.title }}</h3>
                  <p class="text-white/80 text-sm">{{ work.year }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>

    <template v-else>
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Artist Not Found</h1>
          <p class="mb-8">The artist you're looking for doesn't exist.</p>
          <NuxtLink to="/artists" class="px-6 py-3 rounded-lg font-semibold transition-colors">
            Back to Artists
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
