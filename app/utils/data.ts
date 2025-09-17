import type { Works } from "~/types";

export const ARTISTS = [
    {
        id: 1,
        name: "Sarah Chen",
        genre: "Pop/R&B",
        experience: "4 years",
        description: "Multi-platinum recording artist with a soulful voice and contemporary style.",
        image: "/artists/artist_1.jpg",
        location: "Los Angeles, CA",
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        genre: "Hip-Hop/Rap",
        experience: "5 years",
        description: "Award-winning rapper and producer known for innovative beats and lyrics.",
        image: "/artists/artist_2.jpg",
        location: "Atlanta, GA",
    },
    {
        id: 3,
        name: "Luna Park",
        genre: "Indie/Alternative",
        experience: "3 years",
        description: "Singer-songwriter creating atmospheric indie music with electronic elements.",
        image: "/artists/artist_3.jpg",
        location: "Portland, OR",
    },
    {
        id: 4,
        name: "Alex Rivera",
        genre: "Electronic",
        experience: "7 years",
        location: "Miami, FL",
        image: "/artists/artist_4.jpg",
        description: "Electronic music producer and DJ specializing in progressive house and ambient soundscapes.",
    },
    {
        id: 5,
        name: "Emma Thompson",
        genre: "Folk",
        experience: "4 years",
        location: "Nashville, TN",
        image: "/artists/artist_5.jpg",
        description: "Folk singer-songwriter with a powerful voice and storytelling ability rooted in traditional American music.",
    },
    {
        id: 6,
        name: "Jordan Kim",
        genre: "Jazz",
        experience: "10 years",
        location: "New York, NY",
        image: "/artists/artist_6.jpg",
        description: "Accomplished jazz pianist and composer known for innovative arrangements and collaborative performances.",
    },
];

export const BANDS = [
    {
        id: 1,
        name: "Electric Horizon",
        genre: "Electronic Rock",
        description: "Fusion of electronic beats with rock instrumentation, creating an energetic and modern sound.",
        members: 4,
        formed: "2019",
        image: "/bands/band_1.jpg",
        social: { instagram: true, spotify: true },
    },
    {
        id: 2,
        name: "Midnight Collective",
        genre: "Jazz Fusion",
        description: "Contemporary jazz ensemble blending traditional jazz with modern influences and improvisation.",
        members: 5,
        formed: "2021",
        image: "/bands/band_2.jpg",
        social: { instagram: true, spotify: true },
    },
    {
        id: 3,
        name: "Neon Pulse",
        genre: "Synthwave",
        description: "Retro-futuristic electronic music with nostalgic 80s vibes and modern production.",
        members: 3,
        formed: "2020",
        image: "/bands/band_3.jpg",
        social: { instagram: true, spotify: false },
    },
    {
        id: 4,
        name: "Urban Roots",
        genre: "Hip-Hop",
        description: "Conscious hip-hop collective addressing social issues through powerful lyrics and beats.",
        members: 6,
        formed: "2018",
        image: "/bands/band_4.jpg",
        social: { instagram: true, spotify: true },
    },
];

export const WORKS: Works[] = [
    {
        id: 1,
        title: "Neon Dreams",
        artist: "Sarah Chen",
        type: "Music Video",
        genre: "Pop/R&B",
        year: "2024",
        duration: "3:45",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description:
            "A visually stunning music video that captures the essence of urban nightlife through neon-lit cinematography and dynamic choreography.",
        credits: {
            Director: "Michael Johnson",
            Cinematographer: "Lisa Wang",
            Editor: "David Kim",
            Producer: "Studio Team",
        },
    },
    {
        id: 2,
        title: "Studio Sessions",
        artist: "Electric Horizon",
        type: "Photography",
        genre: "Electronic Rock",
        year: "2023",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description: "Intimate behind-the-scenes photography capturing the creative process and energy of Electric Horizon's recording sessions.",
        credits: {
            Photographer: "Alex Rivera",
            "Art Direction": "Emma Thompson",
            "Post-Production": "Studio Team",
        },
    },
    {
        id: 3,
        title: "Urban Beats",
        artist: "Marcus Rodriguez",
        type: "Music Video",
        genre: "Hip-Hop/Rap",
        year: "2024",
        duration: "4:12",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description: "A powerful music video showcasing urban culture and street art, featuring dynamic camera work and authentic locations.",
        credits: {
            Director: "Jordan Smith",
            Cinematographer: "Taylor Kim",
            Editor: "Sam Rodriguez",
        },
    },
    {
        id: 4,
        title: "Live at Sunset",
        artist: "Midnight Collective",
        type: "Video",
        genre: "Jazz Fusion",
        year: "2023",
        duration: "45:30",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description: "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
        credits: {
            Director: "Chris Lee",
            "Audio Engineer": "Pat Wilson",
            "Camera Operators": "Multiple",
        },
    },
    {
        id: 5,
        title: "Portrait Series",
        artist: "Luna Park",
        type: "Photography",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description: "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
        credits: {
            Director: "Chris Lee",
            "Audio Engineer": "Pat Wilson",
            "Camera Operators": "Multiple",
        },
    },
    {
        id: 6,
        title: "Behind the Scenes",
        artist: "Various Artists",
        type: "Documentary",
        thumbnail: "/placeholder.svg?height=300&width=400",
        description: "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
        credits: {
            Director: "Chris Lee",
            "Audio Engineer": "Pat Wilson",
            "Camera Operators": "Multiple",
        },
    },
];

export function populateRandom<T>(arr: T[], num = 1) {
    if (arr.length < num) return [];
    const res: T[] = [];

    for (let i = 0; i < num; i++) {
        res[i] = arr[i]!;
    }

    return res;
}
