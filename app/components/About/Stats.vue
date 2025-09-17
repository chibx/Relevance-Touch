<script lang="ts" setup>
// Statistics data
const stats = [
    { value: "200+", label: "Projects Completed" },
    { value: "50+", label: "Artists Worked With" },
    { value: "15", label: "Awards Won" },
    { value: "6", label: "Years Experience" }
];
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div v-for="stat in stats" :key="stat.label">
                <div class="poppins text-4xl md:text-5xl font-bold mb-2">{{ stat.value }}</div>
                <div>{{ stat.label }}</div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>