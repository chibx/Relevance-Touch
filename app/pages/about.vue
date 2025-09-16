<script setup>
import { useHead } from '#app';

// Team members data
const teamMembers = [
  {
    name: "Michael Johnson",
    role: "Creative Director",
    bio: "Visionary leader with 15+ years in creative direction and brand strategy.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Lisa Wang",
    role: "Lead Cinematographer",
    bio: "Award-winning cinematographer specializing in music videos and commercials.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "David Kim",
    role: "Senior Editor",
    bio: "Post-production expert with a keen eye for storytelling and visual flow.",
    image: "/placeholder.svg?height=300&width=300"
  },
  {
    name: "Emma Thompson",
    role: "Art Director",
    bio: "Creative visionary bringing concepts to life through stunning visual design.",
    image: "/placeholder.svg?height=300&width=300"
  }
];

// Statistics data
const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Artists Worked With" },
  { value: "15", label: "Awards Won" },
  { value: "6", label: "Years Experience" }
];

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

useHead({
  title: 'About Us - Creative Studio',
  meta: [
    { name: 'description', content: 'Learn about our creative studio\'s mission, values, and team. Discover our comprehensive services including music video production, photography, and live recording.' }
  ]
});
</script>


<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 overflow-hidden">
      <div class="absolute inset-0">
        <img src="/placeholder.svg?height=800&width=1200" alt="Studio space" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/50"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 text-balance">
          About Our Studio
        </h1>
        <p class="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
          Where creativity meets excellence, and artistic vision becomes reality
        </p>
      </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div class="prose prose-lg max-w-none">
              <p class="leading-relaxed mb-6">
                Founded in 2018, our creative studio emerged from a shared vision to bridge the gap between artistic
                expression and professional excellence. What started as a small collective of passionate creatives has
                evolved into a full-service studio that nurtures talent and produces world-class content.
              </p>
              <p class="leading-relaxed mb-6">
                We believe that great art comes from collaboration, innovation, and an unwavering commitment to quality.
                Our team combines years of industry experience with fresh perspectives, creating an environment where
                creativity thrives and boundaries are pushed.
              </p>
              <p class="leading-relaxed">
                Today, we're proud to work with emerging and established artists, helping them realize their creative
                vision through music videos, photography, live recordings, and multimedia projects that resonate with
                audiences worldwide.
              </p>
            </div>
          </div>

          <div class="relative">
            <img src="/placeholder.svg?height=600&width=500" alt="Studio team at work"
              class="w-full rounded-xl shadow-lg" />
            <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl flex items-center justify-center">
              <div class="text-center ">
                <div class="text-2xl font-bold">6+</div>
                <div class="text-sm">Years</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values Section -->
    <section class="py-20 bg-muted">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Mission & Values</h2>
          <p class="text-xl max-w-3xl mx-auto">
            Guiding principles that shape everything we do
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Innovation</h3>
            <p>
              We constantly push creative boundaries, embracing new technologies and techniques to deliver cutting-edge
              content that stands out in today's competitive landscape.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Collaboration</h3>
            <p>
              Great art is born from great partnerships. We work closely with our artists and clients, fostering an
              environment where ideas flow freely and creativity flourishes.
            </p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">Excellence</h3>
            <p>
              We maintain the highest standards in every project, from initial concept to final delivery. Quality is
              never compromised in our pursuit of artistic and technical perfection.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Meet Our Team</h2>
          <p class="text-xl max-w-3xl mx-auto">
            The creative minds behind our studio's success
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="member in teamMembers" :key="member.name" class="text-center group">
            <div class="relative mb-6">
              <img :src="member.image" :alt="member.name"
                class="w-48 h-48 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300" />
              <div class="absolute inset-0 rounded-full group-hover:transition-colors duration-300">
              </div>
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-accent font-medium mb-3">{{ member.role }}</p>
            <p class="text-sm ">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div v-for="stat in stats" :key="stat.label">
            <div class="text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div>{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p class="text-xl max-w-3xl mx-auto">
            Comprehensive creative solutions for artists and brands
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="service in services" :key="service.title"
            class="bg-card rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div class="w-12 h-12 rounded-lg flex items-center justify-center mb-6">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ service.title }}</h3>
            <p class="mb-6">{{ service.description }}</p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature" class="text-sm flex items-center">
                <svg class="w-4 h-4 text-primary mr-2 flex-shrink-0" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA Section -->
    <section class="py-20 bg-muted">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Creative Journey?
        </h2>
        <p class="text-xl mb-8">
          Let's collaborate and bring your artistic vision to life. Get in touch with our team today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="mailto:hello@studio.com" class="px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get In Touch
          </a>
          <NuxtLink to="/works"
            class="bg-card hover:bg-accent hover:text-accent-foreground border border-b px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            View Our Portfolio
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>