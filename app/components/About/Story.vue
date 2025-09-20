<script lang="ts" setup></script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h2 class="poppins text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
                <div class="prose prose-lg max-w-none">
                    <p class="leading-relaxed mb-6">
                        Founded in 2018, our creative studio emerged from a shared vision to bridge the gap between
                        artistic expression and professional excellence. What started as a small collective of
                        passionate creatives has evolved into a full-service studio that nurtures talent and produces
                        world-class content.
                    </p>
                    <p class="leading-relaxed mb-6">
                        We believe that great art comes from collaboration, innovation, and an unwavering commitment to
                        quality. Our team combines years of industry experience with fresh perspectives, creating an
                        environment where creativity thrives and boundaries are pushed.
                    </p>
                    <p class="leading-relaxed">
                        Today, we're proud to work with emerging and established artists, helping them realize their
                        creative vision through music videos, photography, live recordings, and multimedia projects that
                        resonate with audiences worldwide.
                    </p>
                </div>
            </div>

            <div class="relative rounded-xl camera">
                <!-- <img src="/placeholder.svg?height=600&width=500" alt="Studio team at work"
              class="w-full rounded-xl shadow-lg" /> -->
                <img
                    src="/camera.jpeg"
                    alt="Studio team at work"
                    class="hover:brightness-75 rounded-xl transition-all duration-300"
                    height="500"
                    width="500"
                />
                <div class="absolute -bottom-6 -right-6 w-32 h-32 rounded-xl flex items-center justify-center">
                    <div class="poppins text-center">
                        <div class="text-2xl font-bold">6+</div>
                        <div class="text-sm">Years</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.camera {
    max-width: 500px;
    max-height: 500px;
}
</style>
