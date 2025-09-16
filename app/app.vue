<script setup>
import { useHead } from '#app';

// Global app configuration - must be at top level
useHead({
  htmlAttrs: {
    lang: 'en'
  }
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
