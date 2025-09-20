<script setup>
import { useHead, useRoute } from "#app";

const route = useRoute();
const artistId = parseInt(route.params.id);

const artistsData = ARTISTS_DATA;

const artist = artistsData[artistId] || null;

useHead({
    title: artist ? `${artist.name} - Creative Studio` : "Artist Not Found - Creative Studio",
    meta: [
        {
            name: "description",
            content: artist
                ? `Learn more about ${artist.name}, ${artist.genre} artist with ${artist.experience} of experience.`
                : "Artist not found.",
        },
    ],
});
</script>

<template>
    <div class="min-h-screen">
        <template v-if="artist">
            <section class="relative h-96 md:h-[500px] overflow-hidden">
                <!-- <img :src="artist.heroImage" :alt="artist.name" class="w-full h-full object-cover" /> -->
                <img src="/studio.webp" :alt="artist.name" class="w-full h-full object-cover" />
                <div class="absolute inset-0 bg-black/50"></div>
                <div class="absolute bottom-0 left-0 right-0 p-8">
                    <div class="max-w-7xl mx-auto">
                        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                            {{ artist.name }}
                        </h1>
                        <p class="text-xl md:text-2xl text-white/90">
                            {{ artist.genre }}
                        </p>
                    </div>
                </div>
            </section>

            <section class="py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div class="lg:col-span-2">
                            <div class="prose prose-lg max-w-none">
                                <h2 class="text-3xl font-bold mb-6">About {{ artist.name }}</h2>
                                <p class="leading-relaxed mb-6">
                                    {{ artist.bio }}
                                </p>

                                <h3 class="text-2xl font-bold mb-4">Musical Journey</h3>
                                <p class="leading-relaxed mb-6">
                                    {{ artist.journey }}
                                </p>

                                <h3 class="text-2xl font-bold mb-4">Achievements</h3>
                                <ul class="space-y-2">
                                    <li v-for="achievement in artist.achievements" :key="achievement">
                                        <span class="font-bold">•</span> {{ achievement }}
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="lg:col-span-1">
                            <div class="bg-card rounded-xl p-6 mb-8">
                                <img
                                    :src="artist.image"
                                    :alt="artist.name"
                                    class="w-full aspect-square object-cover rounded-lg mb-6"
                                />

                                <div class="space-y-4">
                                    <div class="space-y-4 flex lg:block flex-wrap gap-x-10 justify-center">
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
                                    </div>

                                    <div class="flex lg:block flex-col items-center">
                                        <h4 class="font-semibold mb-2">Follow</h4>
                                        <ArtistSocials :socials="artist.socials" />
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
                                <img
                                    :src="work.thumbnail"
                                    :alt="work.title"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div class="absolute top-4 left-4">
                                    <span class="px-3 py-1 rounded-full text-sm font-medium">
                                        {{ work.type }}
                                    </span>
                                </div>
                                <div
                                    class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                                >
                                    <h3 class="text-white font-semibold mb-1">
                                        {{ work.title }}
                                    </h3>
                                    <p class="text-white/80 text-sm">
                                        {{ work.year }}
                                    </p>
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
