<script lang="ts" setup>
// Services data
const services = [
    {
        title: "Music Video Production",
        description: "Full-service music video production from concept development to final delivery.",
        icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
        features: [
            "Concept Development",
            "Pre-production Planning",
            "Professional Filming",
            "Post-production & Editing",
            "Color Grading & VFX"
        ]
    },
    {
        title: "Photography Services",
        description: "Professional photography for artists, albums, and promotional materials.",
        icon: "M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z M15 13a3 3 0 11-6 0 3 3 0 016 0z",
        features: [
            "Portrait Photography",
            "Album Cover Shoots",
            "Promotional Photos",
            "Event Photography",
            "Professional Retouching"
        ]
    },
    {
        title: "Live Recording",
        description: "High-quality live recording and streaming services for performances.",
        icon: "M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z",
        features: [
            "Multi-camera Setup",
            "Professional Audio Recording",
            "Live Streaming Capabilities",
            "Post-production Editing",
            "Distribution Ready Files"
        ]
    },
    {
        title: "Creative Consulting",
        description: "Strategic creative guidance to help artists develop their visual identity.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        features: [
            "Brand Development",
            "Visual Identity Design",
            "Creative Strategy",
            "Market Positioning",
            "Campaign Planning"
        ]
    },
    {
        title: "Audio Production",
        description: "Professional audio recording, mixing, and mastering services.",
        icon: "M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3",
        features: [
            "Studio Recording",
            "Mixing & Mastering",
            "Sound Design",
            "Podcast Production",
            "Audio Post-production"
        ]
    },
    {
        title: "Digital Marketing",
        description: "Comprehensive digital marketing solutions to amplify your creative work.",
        icon: "M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z",
        features: [
            "Social Media Strategy",
            "Content Creation",
            "Campaign Management",
            "Analytics & Reporting",
            "Influencer Partnerships"
        ]
    }
];
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="poppins text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
            <p class="text-xl max-w-3xl mx-auto">
                Comprehensive creative solutions for artists and brands
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="service in services" :key="service.title"
                class="bg-card rounded-xl p-8 shadow-sm hover:shadow-2xl transition-shadow duration-300">
                <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                    <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
                    </svg>
                </div>
                <h3 class="poppins text-xl font-semibold mb-4">{{ service.title }}</h3>
                <p class="mb-6">{{ service.description }}</p>
                <ul class="space-y-2">
                    <li v-for="feature in service.features" :key="feature" class="text-sm flex items-center">
                        <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                            </path>
                        </svg>
                        {{ feature }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped></style>