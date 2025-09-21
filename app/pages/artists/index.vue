<script setup>
import { navigateTo, useHead } from "#app";
import { computed, ref } from "vue";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

// SEO - moved to top level
useHead({
    title: "Artists - Creative Studio",
    meta: [
        {
            name: "description",
            content:
                "Meet our talented roster of artists spanning multiple genres including Pop, R&B, Hip-Hop, Electronic, Folk, and Jazz.",
        },
    ],
});

// Sample artists data
const allArtists = ARTISTS;

// Reactive state
const selectedGenre = ref("all");
const searchQuery = ref("");

// Computed properties
const genres = computed(() => [...new Set(allArtists.map((artist) => artist.genre))]);

const filteredArtists = computed(() => {
    let filtered = allArtists;

    if (selectedGenre.value !== "all") {
        filtered = filtered.filter((artist) => artist.genre === selectedGenre.value);
    }

    if (searchQuery.value) {
        const query = searchQuery.value.toLowerCase();
        filtered = filtered.filter(
            (artist) =>
                artist.name.toLowerCase().includes(query) ||
                artist.genre.toLowerCase().includes(query) ||
                artist.location.toLowerCase().includes(query),
        );
    }

    return filtered;
});

// Methods
const navigateToArtist = (artistId) => {
    navigateTo(`/artists/${artistId}`);
};

const [parent] = useAutoAnimate();
</script>

<template>
    <div class="min-h-screen">
        <!-- Header Section -->
        <section class="bg-muted py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Artists</h1>
                <p class="text-xl max-w-3xl mx-auto">
                    Meet the talented individuals who bring our creative vision to life. Each artist brings their unique
                    style and perspective to create extraordinary musical experiences.
                </p>
            </div>
        </section>

        <!-- Filters Section -->
        <section class="py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex flex-col md:flex-row gap-6 items-center justify-center">
                    <!-- Genre Filter -->
                    <div class="flex flex-wrap gap-3">
                        <button
                            @click="selectedGenre = 'all'"
                            :class="[
                                'px-4 py-2 cursor-pointer rounded-full font-medium transition-colors duration-200',
                                selectedGenre === 'all' ? 'bg-black text-white' : '',
                            ]"
                        >
                            All Genres
                        </button>
                        <button
                            v-for="genre in genres"
                            :key="genre"
                            @click="selectedGenre = genre"
                            :class="[
                                'px-4 py-2 cursor-pointer rounded-full font-medium transition-colors duration-200',
                                selectedGenre === genre ? 'bg-black text-white' : '',
                            ]"
                        >
                            {{ genre }}
                        </button>
                    </div>

                    <!-- Search -->
                    <!-- <div class="relative">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search artists..."
                            class="pl-10 pr-4 py-2 w-64 border border-b rounded-lg bg-input placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        <svg
                            class="absolute left-3 top-2.5 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div> -->
                </div>
            </div>
        </section>

        <!-- Artists Grid -->
        <section class="py-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div v-if="filteredArtists.length > 0" ref="parent" class="flex flex-wrap justify-center gap-8">
                    <div
                        v-for="artist in filteredArtists"
                        :key="artist.id"
                        class="cursor-pointer max-w-[380px]"
                        @click="navigateToArtist(artist.id)"
                    >
                        <div
                            class="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2"
                        >
                            <div class="aspect-square overflow-hidden">
                                <img
                                    :src="artist.image"
                                    :alt="artist.name"
                                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div class="p-6">
                                <h3 class="text-xl font-semibold mb-2">
                                    {{ artist.name }}
                                </h3>
                                <p class="text-accent font-medium mb-2">
                                    {{ artist.genre }}
                                </p>
                                <p class="text-sm mb-3">
                                    {{ artist.description }}
                                </p>
                                <div class="flex items-center justify-between text-sm">
                                    <span>{{ artist.experience }}</span>
                                    <span>{{ artist.location }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- No Results -->
                <div v-else class="text-center py-16">
                    <svg class="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                    </svg>
                    <h3 class="text-xl font-semibold mb-2">No artists found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                </div>
            </div>
        </section>
    </div>
</template>
