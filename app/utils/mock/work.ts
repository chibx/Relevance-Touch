import type { ArtisWork, Works } from "~/types";

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
    description:
      "Intimate behind-the-scenes photography capturing the creative process and energy of Electric Horizon's recording sessions.",
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
    description:
      "A powerful music video showcasing urban culture and street art, featuring dynamic camera work and authentic locations.",
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
    description:
      "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
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
    description:
      "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
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
    description:
      "A full-length concert recording capturing the magic of Midnight Collective's live performance at the iconic Sunset Venue.",
    credits: {
      Director: "Chris Lee",
      "Audio Engineer": "Pat Wilson",
      "Camera Operators": "Multiple",
    },
  },
];

export const artistWorks: Record<number, ArtisWork[]> = {
  1: [
    {
      id: 1,
      title: "Neon Dreams",
      type: "Music Video",
      year: "2024",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Studio Sessions",
      type: "Photography",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
  2: [
    {
      id: 1,
      title: "Street Symphony",
      type: "Album",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Urban Pulse",
      type: "Single",
      year: "2022",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
  3: [
    {
      id: 1,
      title: "Whispers in the Woods",
      type: "EP",
      year: "2022",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Golden Haze",
      type: "Music Video",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
  4: [
    {
      id: 1,
      title: "Ethereal",
      type: "Single",
      year: "2024",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Nocturne",
      type: "Album",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
  5: [
    {
      id: 1,
      title: "Echoes of the Valley",
      type: "Album",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "Live at the Bluebird",
      type: "Live Performance",
      year: "2024",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
  6: [
    {
      id: 1,
      title: "Kinetic",
      type: "Album",
      year: "2024",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: 2,
      title: "NYC Sessions",
      type: "Live Album",
      year: "2023",
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ],
};
