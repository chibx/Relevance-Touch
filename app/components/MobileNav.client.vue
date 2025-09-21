<script setup lang="ts">
import { animate } from "motion/mini";
import { inertia } from "motion";

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
const menu = useTemplateRef("menu");

watch(
    () => props.isOpen,
    async () => {
        const elements = unref(links);
        const menuEl = unref(menu);
        if (elements === null || menuEl === null) return;

        const length = elements.length;
        if (props.isOpen) {
            animate(menuEl, { height: ["0px", `${height}px`] });
            // await delay(100);

            elements.forEach((e, idx) => {
                const _el = e!.$el as HTMLElement;
                animate(
                    _el,
                    {
                        opacity: [0, 1],
                        // I know, I know, no magic numbers allowed but...
                        transform: [`translate(${200 + idx * 10}px, -${52 * length - idx * 40}px)`, `translate(0, 0)`],
                    },
                    {
                        duration: 0.5,
                        delay: (idx / length) * 0.3,
                        ease: "easeIn",
                    },
                );
            });
        } else {
            animate(menuEl, { height: 0 });
            elements.forEach((e, idx) => {
                const _el = e!.$el as HTMLElement;
                animate(_el, { opacity: [1, 0] }, { delay: idx / length + 0.05 });
            });
        }
    },
);
</script>

<template>
    <div ref="menu" class="fixed w-full top-[64px] md:hidden py-4 border-t bg-white h-0">
        <div class="flex flex-col space-y-2 h-full overflow-hidden">
            <NuxtLink
                ref="links"
                v-for="[path, name] in routeMap"
                active-class="mobile-active"
                :to="path"
                class="px-4 py-3.5 transition-colors opacity-0"
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
