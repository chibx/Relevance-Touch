<script setup lang="ts">
const props = defineProps<{
    isOpen: boolean;
}>();

const height = window.innerHeight - 64; // Size of the header via inspection
const routeMap: [string, string][] = [
    ["/", "Home"],
    ["/artists", "Artists"],
    ["/bands", "Bands"],
    ["/works", "Works"],
    ["/about", "About"],
];

const links = useTemplateRef("links");

watch(
    () => props.isOpen,
    () => {
        if (props.isOpen) {
        } else {
        }
    },
);

function openMenu() {}
function closeMenu() {}
</script>

<template>
    <div
        v-if="isOpen"
        class="fixed w-full top-[64px] md:hidden py-4 border-t bg-white"
        :style="{ height: `${height}px` }"
    >
        <div class="flex flex-col space-y-2">
            <NuxtLink
                ref="links"
                v-for="[path, name] in routeMap"
                active-class="mobile-active"
                :to="path"
                class="px-4 py-2.5 transition-colors"
                >{{ name }}</NuxtLink
            >
        </div>
    </div>
</template>

<style scoped>
.mobile-active {
    background-color: rgb(226, 226, 226);
}
</style>
