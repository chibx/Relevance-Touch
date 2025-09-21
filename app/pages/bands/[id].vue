<script setup>
import { useHead, useRoute } from "#app";

const route = useRoute();
const bandId = parseInt(route.params.id);

const bandsData = BAND_DATA;

const band = bandsData[bandId] || null;

useHead({
    title: band ? `${band.name} - Creative Studio` : "Band Not Found - Creative Studio",
    meta: [
        {
            name: "description",
            content: band
                ? `Learn more about ${band.name}, ${band.genre} band formed in ${band.formed}.`
                : "Band not found.",
        },
    ],
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
                        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
                            {{ band.name }}
                        </h1>
                        <p class="text-xl md:text-2xl text-white/90">
                            {{ band.genre }}
                        </p>
                    </div>
                </div>
            </section>

            <section class="py-16">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div class="lg:col-span-2">
                            <div class="prose prose-lg max-w-none">
                                <h2 class="text-3xl font-bold mb-6">About {{ band.name }}</h2>
                                <p class="leading-relaxed mb-6">
                                    {{ band.bio }}
                                </p>

                                <h3 class="text-2xl font-bold mb-4">Band Members</h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                    <div
                                        v-for="member in band.bandMembers"
                                        :key="member.name"
                                        class="flex items-center space-x-4"
                                    >
                                        <img
                                            :src="member.image"
                                            :alt="member.name"
                                            class="w-16 h-16 rounded-full object-cover"
                                        />
                                        <div>
                                            <h4 class="font-semibold">
                                                {{ member.name }}
                                            </h4>
                                            <p>{{ member.instrument }}</p>
                                        </div>
                                    </div>
                                </div>

                                <h3 class="text-2xl font-bold mb-4">Discography</h3>
                                <div class="space-y-4">
                                    <div v-for="album in band.discography" :key="album.title" class="border-l-4 pl-4">
                                        <h4 class="font-semibold">
                                            {{ album.title }}
                                        </h4>
                                        <p>{{ album.year }} • {{ album.type }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:col-span-1">
                            <div class="bg-card rounded-xl p-6 mb-8">
                                <img
                                    :src="band.image"
                                    :alt="band.name"
                                    class="w-full aspect-video object-cover rounded-lg mb-6"
                                />

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
                                        <Socials :socials="band.socials" />
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
                    <NuxtLink
                        to="/bands"
                        class="px-6 py-3 rounded-full bg-black text-white hover:bg-black/80 font-semibold transition-colors"
                    >
                        Back to Bands
                    </NuxtLink>
                </div>
            </div>
        </template>
    </div>
</template>
