<script setup>
import { ref } from 'vue';
const mobileMenuOpen = ref(false);
</script>

<template>
  <div class="min-h-screen overflow-hidden">
    <!-- Navigation -->
    <nav class="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <NuxtLink to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-lg flex items-center justify-center">
              <span class="font-bold text-lg">S</span>
            </div>
            <span class="text-xl font-bold ">Studio</span>
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <NuxtLink to="/" class="transition-colors">Home</NuxtLink>
            <NuxtLink to="/artists" class="transition-colors">Artists</NuxtLink>
            <NuxtLink to="/bands" class="transition-colors">Bands</NuxtLink>
            <NuxtLink to="/works" class="transition-colors">Works</NuxtLink>
            <NuxtLink to="/about" class="transition-colors">About</NuxtLink>
          </div>

          <!-- Mobile menu button -->
          <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden p-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t ">
          <div class="flex flex-col space-y-2">
            <NuxtLink to="/" class="px-4 py-2 transition-colors">Home</NuxtLink>
            <NuxtLink to="/artists" class="px-4 py-2 transition-colors">Artists
            </NuxtLink>
            <NuxtLink to="/bands" class="px-4 py-2 transition-colors">Bands
            </NuxtLink>
            <NuxtLink to="/works" class="px-4 py-2 transition-colors">Works
            </NuxtLink>
            <NuxtLink to="/about" class="px-4 py-2 transition-colors">About
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-muted border-t">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="col-span-1 md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center">
                <span class="font-bold text-lg">S</span>
              </div>
              <span class="text-xl font-bold ">Studio</span>
            </div>
            <p class="mb-4">
              Professional creative studio showcasing talented artists, bands, and multimedia works.
            </p>
          </div>

          <div>
            <h3 class="font-semibold mb-4">Quick Links</h3>
            <div class="space-y-2">
              <NuxtLink to="/artists" class="block hover:underline underline-offset-4 transition-colors">Artists
              </NuxtLink>
              <NuxtLink to="/bands" class="block hover:underline underline-offset-4 transition-colors">Bands
              </NuxtLink>
              <NuxtLink to="/works" class="block hover:underline underline-offset-4 transition-colors">Works
              </NuxtLink>
            </div>
          </div>

          <div>
            <h3 class="font-semibold mb-4">Contact</h3>
            <div class="space-y-2 ">
              <p>relevancetouch@gmail.com</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div class="border-t mt-8 pt-8 text-center ">
          <p>&copy; 2024 Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
footer {
  background-color: #f7f4f4;
}
</style>
