<script lang="ts" setup>
// Team members data
const teamMembers = [
    {
        name: "Michael Johnson",
        role: "Creative Director",
        bio: "Visionary leader with 15+ years in creative direction and brand strategy.",
        image: "/members/5.webp"
    },
    {
        name: "Lisa Wang",
        role: "Lead Cinematographer",
        bio: "Award-winning cinematographer specializing in music videos and commercials.",
        image: "/members/7.webp"
    },
    {
        name: "David Kim",
        role: "Senior Editor",
        bio: "Post-production expert with a keen eye for storytelling and visual flow.",
        image: "/members/4.webp"
    },
    {
        name: "Emma Thompson",
        role: "Art Director",
        bio: "Creative visionary bringing concepts to life through stunning visual design.",
        image: "/members/3.webp"
    }
];
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
            <h2 class="poppins text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p class="text-xl max-w-3xl mx-auto">
                The creative minds behind our studio's success
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="member in teamMembers" :key="member.name" class="text-center">
                <div class="relative mb-6">
                    <img :src="member.image" :alt="member.name"
                        class="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
                </div>
                <h3 class="poppins text-xl font-semibold mb-2">{{ member.name }}</h3>
                <p class="text-accent font-medium mb-3">{{ member.role }}</p>
                <p class="">{{ member.bio }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped></style>