<script setup>
import { useHead } from "#app";

// Global app configuration - must be at top level
useHead({
    htmlAttrs: {
        lang: "en",
    },
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
* {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}

.roboto {
    font-family: "Roboto", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-variation-settings: "wdth" 100;
}

.poppins {
    font-family: "Poppins", sans-serif;
    font-style: normal;
}
</style>
