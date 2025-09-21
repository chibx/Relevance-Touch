<script setup>
import { useHead } from "#app";
import { computed, ref, watch } from "vue";
import { useAutoAnimate } from "@formkit/auto-animate/vue";

// SEO
useHead({
    title: "Our Works - Creative Studio",
    meta: [
        {
            name: "description",
            content:
                "Explore our comprehensive portfolio of music videos, photography, and multimedia projects showcasing creative excellence.",
        },
    ],
});

// Sample works data
const allWorks = WORKS;

// Reactive state
const selectedType = ref("all");
const selectedGenre = ref("all");
const searchQuery = ref("");
const sortBy = ref("newest");
const viewMode = ref("grid");
const currentPage = ref(1);
const itemsPerPage = 12;
const selectedWork = ref(null);

// Computed properties
const workTypes = computed(() => [...new Set(allWorks.map((work) => work.type))]);
const genres = computed(() => [...new Set(allWorks.map((work) => work.genre))]);

const filteredWorks = computed(() => {
    let filtered = [...allWorks];

    if (selectedType.value !== "all") {
        filtered = filtered.filter((work) => work.type === selectedType.value);
    }

    if (selectedGenre.value !== "all") {
        filtered = filtered.filter((work) => work.genre === selectedGenre.value);
    }

    // if (searchQuery.value) {
    //     const query = searchQuery.value.toLowerCase();
    //     filtered = filtered.filter(
    //         (work) =>
    //             work.title.toLowerCase().includes(query) ||
    //             work.artist.toLowerCase().includes(query) ||
    //             work.genre.toLowerCase().includes(query),
    //     );
    // }

    filtered.sort((a, b) => {
        switch (sortBy.value) {
            case "newest":
                return parseInt(b.year) - parseInt(a.year);
            case "oldest":
                return parseInt(a.year) - parseInt(b.year);
            case "title":
                return a.title.localeCompare(b.title);
            case "artist":
                return a.artist.localeCompare(b.artist);
            default:
                return 0;
        }
    });

    return filtered;
});

const totalPages = computed(() => Math.ceil(filteredWorks.value.length / itemsPerPage));

const paginatedWorks = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredWorks.value.slice(start, end);
});

const visiblePages = computed(() => {
    const pages = [];
    const start = Math.max(1, currentPage.value - 2);
    const end = Math.min(totalPages.value, currentPage.value + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
});

// Methods
const openWorkModal = (work) => {
    selectedWork.value = work;
    document.body.style.overflow = "hidden";
};

const closeWorkModal = () => {
    selectedWork.value = null;
    document.body.style.overflow = "auto";
};

// Watchers
watch([selectedType, selectedGenre, searchQuery], () => {
    currentPage.value = 1;
});

const [itemParent] = useAutoAnimate();
const [viewParent] = useAutoAnimate();
</script>

<template>
    <div class="min-h-screen">
        <!-- Header Section -->
        <section class="py-20">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 class="text-4xl md:text-5xl font-bold mb-6">Our Works</h1>
                <p class="text-xl max-w-3xl mx-auto">
                    Explore our comprehensive portfolio of video productions, photography, and multimedia projects. Each
                    piece represents our commitment to creative excellence and artistic innovation.
                </p>
            </div>
        </section>

        <!-- Filters Section -->
        <section class="py-8">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Type Filters -->
                <div class="mb-6">
                    <h3 class="text-lg font-semibold mb-4">Filter by Type</h3>
                    <div class="w-full flex flex-wrap gap-3 justify-center">
                        <button
                            @click="selectedType = 'all'"
                            :class="[
                                'cursor-pointer px-4 py-2.5 rounded-full font-medium transition-colors duration-200',
                                selectedType === 'all' ? 'bg-black text-white' : '',
                            ]"
                        >
                            All Works
                        </button>
                        <button
                            v-for="type in workTypes"
                            :key="type"
                            @click="selectedType = type"
                            :class="[
                                'cursor-pointer px-5 py-2.5 rounded-full font-medium transition-colors duration-200',
                                selectedType === type ? 'bg-black text-white' : '',
                            ]"
                        >
                            {{ type }}
                        </button>
                    </div>
                </div>

                <!-- Search and Sort -->
                <div class="flex flex-col md:flex-row gap-4 items-center justify-end">
                    <!-- Search Query -->
                    <!-- <div class="relative flex-1 max-w-md">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search works..."
                            class="w-full pl-10 pr-4 py-2 border border-b rounded-lg bg-input placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                        <svg
                            class="absolute left-3 top-2.5 w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div> -->

                    <div class="flex items-center space-x-4 gap-2.5">
                        <select
                            v-model="sortBy"
                            class="px-4 py-2 border border-b rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="title">Title A-Z</option>
                            <option value="artist">Artist A-Z</option>
                        </select>

                        <div class="flex border border-b rounded-lg overflow-hidden">
                            <button
                                @click="viewMode = 'grid'"
                                :class="[
                                    'cursor-pointer p-2 transition-colors',
                                    viewMode === 'grid' ? 'bg-black text-white' : '',
                                ]"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                @click="viewMode = 'list'"
                                :class="[
                                    'cursor-pointer p-2 transition-colors',
                                    viewMode === 'list' ? 'bg-black text-white' : '',
                                ]"
                            >
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Results Count -->
                <!-- <div class="mt-4 text-sm">
                    Showing {{ paginatedWorks.length }} of
                    {{ filteredWorks.length }} works
                </div> -->
            </div>
        </section>

        <!-- Works Gallery -->
        <section class="py-16">
            <div ref="viewParent" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Grid View -->
                <div
                    ref="itemParent"
                    v-if="viewMode === 'grid'"
                    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <div
                        v-for="work in paginatedWorks"
                        :key="work.id"
                        class="group cursor-pointer"
                        @click="openWorkModal(work)"
                    >
                        <div
                            class="relative overflow-hidden rounded-xl aspect-video bg-card shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1"
                        >
                            <img
                                :src="work.thumbnail"
                                :alt="work.title"
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div
                                class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"
                            ></div>

                            <!-- Type Badge -->
                            <!-- <div class="absolute top-3 left-3">
                                <span
                                    class="px-2 py-1 rounded-full text-xs font-medium"
                                >
                                    {{ work.type }}
                                </span>
                            </div> -->

                            <!-- Work Info -->
                            <div
                                class="absolute flex items-end justify-between bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                            >
                                <div>
                                    <h3 class="text-white font-semibold mb-1 text-sm">
                                        {{ work.title }}
                                    </h3>
                                    <p class="text-white/80 text-xs">
                                        {{ work.artist }}
                                    </p>
                                    <p class="text-white/60 text-xs">
                                        {{ work.year }}
                                    </p>
                                </div>

                                <span class="px-2 py-1 text-white rounded-full text-sm font-medium">
                                    {{ work.type }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- List View -->
                <div ref="itemParent" v-else class="space-y-4">
                    <div
                        v-for="work in paginatedWorks"
                        :key="work.id"
                        class="bg-card rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                        @click="openWorkModal(work)"
                    >
                        <div class="flex items-center space-x-6">
                            <div class="relative w-32 h-20 rounded-lg overflow-hidden flex-shrink-0">
                                <img :src="work.thumbnail" :alt="work.title" class="w-full h-full object-cover" />
                            </div>

                            <div class="flex-1 min-w-0">
                                <div class="flex items-start justify-between">
                                    <div>
                                        <h3 class="text-lg font-semibold mb-1">
                                            {{ work.title }}
                                        </h3>
                                        <p class="mb-2">{{ work.artist }}</p>
                                        <div class="flex items-center space-x-4 text-sm">
                                            <span class="text-primary px-2 py-1 rounded-full text-xs font-medium">{{
                                                work.type
                                            }}</span>
                                            <span>{{ work.genre }}</span>
                                            <span>{{ work.year }}</span>
                                        </div>
                                    </div>
                                    <div class="text-right">
                                        <p class="text-sm">
                                            {{ work.duration || "View" }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- No Results -->
                <div v-if="filteredWorks.length === 0" class="text-center py-16">
                    <h3 class="text-xl font-semibold mb-2">No works found</h3>
                    <p>Try adjusting your filters or search terms.</p>
                </div>
            </div>
        </section>

        <!-- Work Modal -->
        <div
            v-if="selectedWork"
            class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            @click="closeWorkModal"
        >
            <div class="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" @click.stop>
                <div class="relative">
                    <img
                        :src="selectedWork.thumbnail"
                        :alt="selectedWork.title"
                        class="w-full h-64 md:h-80 object-cover rounded-t-xl"
                    />
                    <button
                        @click="closeWorkModal"
                        class="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                    >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            ></path>
                        </svg>
                    </button>
                </div>

                <div class="p-8">
                    <div class="flex items-start justify-between mb-6">
                        <div>
                            <h2 class="text-3xl font-bold mb-2">
                                {{ selectedWork.title }}
                            </h2>
                            <p class="text-xl text-accent mb-2">
                                {{ selectedWork.artist }}
                            </p>
                            <div class="flex items-center space-x-4 text-sm">
                                <span class="text-primary px-3 py-1 rounded-full font-medium">{{
                                    selectedWork.type
                                }}</span>
                                <span>{{ selectedWork.genre }}</span>
                                <span>{{ selectedWork.year }}</span>
                                <span v-if="selectedWork.duration">{{ selectedWork.duration }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="prose prose-lg max-w-none">
                        <p class="leading-relaxed">
                            {{ selectedWork.description }}
                        </p>
                    </div>

                    <div v-if="selectedWork.credits" class="mt-8">
                        <h3 class="text-xl font-semibold mb-4">Credits</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="(credit, role) in selectedWork.credits" :key="role">
                                <h4 class="font-medium">{{ role }}</h4>
                                <p>{{ credit }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
