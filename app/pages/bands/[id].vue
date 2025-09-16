<script setup>
import { useHead, useRoute } from '#app';

const route = useRoute();
const bandId = parseInt(route.params.id);

const bandsData = {
  1: {
    id: 1,
    name: "Electric Horizon",
    genre: "Electronic Rock",
    members: 4,
    formed: "2019",
    location: "New York, NY",
    image: "/placeholder.svg?height=300&width=500",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Electric Horizon represents the cutting edge of electronic rock, seamlessly blending synthesized beats with traditional rock instrumentation. Formed in 2019, the band has quickly established themselves as pioneers in the genre, creating an energetic and modern sound that resonates with audiences worldwide.",
    social: { instagram: true, spotify: true },
    bandMembers: [
      { name: "Alex Chen", instrument: "Lead Vocals, Synth", image: "/placeholder.svg?height=100&width=100" },
      { name: "Jordan Smith", instrument: "Guitar, Backing Vocals", image: "/placeholder.svg?height=100&width=100" },
      { name: "Sam Rodriguez", instrument: "Bass, Electronics", image: "/placeholder.svg?height=100&width=100" },
      { name: "Taylor Kim", instrument: "Drums, Percussion", image: "/placeholder.svg?height=100&width=100" }
    ],
    discography: [
      { title: "Digital Dreams", year: "2024", type: "Album" },
      { title: "Neon Nights", year: "2023", type: "EP" },
      { title: "Electric Pulse", year: "2022", type: "Single" }
    ]
  }
};

const band = bandsData[bandId] || null;

useHead({
  title: band ? `${band.name} - Creative Studio` : 'Band Not Found - Creative Studio',
  meta: [
    { name: 'description', content: band ? `Learn more about ${band.name}, ${band.genre} band formed in ${band.formed}.` : 'Band not found.' }
  ]
});
</script>

<template>
  <div class="min-h-screen">
    <template v-if="band">
      <section class="relative h-96 md:h-[500px] overflow-hidden">
        <img :src="band.heroImage" :alt="band.name" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="absolute bottom-0 left-0 right-0 p-8">
          <div class="max-w-7xl mx-auto">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">{{ band.name }}</h1>
            <p class="text-xl md:text-2xl text-white/90">{{ band.genre }}</p>
          </div>
        </div>
      </section>

      <section class="py-16">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div class="lg:col-span-2">
              <div class="prose prose-lg max-w-none">
                <h2 class="text-3xl font-bold mb-6">About {{ band.name }}</h2>
                <p class="leading-relaxed mb-6">{{ band.bio }}</p>

                <h3 class="text-2xl font-bold mb-4">Band Members</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div v-for="member in band.bandMembers" :key="member.name" class="flex items-center space-x-4">
                    <img :src="member.image" :alt="member.name" class="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <h4 class="font-semibold ">{{ member.name }}</h4>
                      <p>{{ member.instrument }}</p>
                    </div>
                  </div>
                </div>

                <h3 class="text-2xl font-bold mb-4">Discography</h3>
                <div class="space-y-4">
                  <div v-for="album in band.discography" :key="album.title" class="border-l-4 border-primary pl-4">
                    <h4 class="font-semibold ">{{ album.title }}</h4>
                    <p>{{ album.year }} • {{ album.type }}</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="lg:col-span-1">
              <div class="bg-card rounded-xl p-6 mb-8">
                <img :src="band.image" :alt="band.name" class="w-full aspect-video object-cover rounded-lg mb-6" />

                <div class="space-y-4">
                  <div>
                    <h4 class="font-semibold mb-2">Genre</h4>
                    <p>{{ band.genre }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Members</h4>
                    <p>{{ band.members }} members</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Formed</h4>
                    <p>{{ band.formed }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Location</h4>
                    <p>{{ band.location }}</p>
                  </div>

                  <div>
                    <h4 class="font-semibold mb-2">Follow</h4>
                    <div class="flex space-x-3">
                      <a v-if="band.social.instagram" href="#"
                        class="w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path
                            d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.073-1.689-.073-4.849 0-3.204.013-3.583.072-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a v-if="band.social.spotify" href="#"
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
    </template>

    <template v-else>
      <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-bold mb-4">Band Not Found</h1>
          <p class="mb-8">The band you're looking for doesn't exist.</p>
          <NuxtLink to="/bands" class="px-6 py-3 rounded-lg font-semibold transition-colors">
            Back to Bands
          </NuxtLink>
        </div>
      </div>
    </template>
  </div>
</template>
