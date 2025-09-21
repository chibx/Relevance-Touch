import type { Band } from "~/types";

export const BAND_DATA: Record<number, Band> = {
  1: {
    id: 1,
    name: "Electric Horizon",
    genre: "Electronic Rock",
    members: 4,
    formed: "2019",
    image: "/bands/band_1.jpg",
    location: "New York, NY",
    heroImage: "/bands/band_1.jpg",
    bio: "Electric Horizon represents the cutting edge of electronic rock, seamlessly blending synthesized beats with traditional rock roleation. Formed in 2019, the band has quickly established themselves as pioneers in the genre, creating an energetic and modern sound that resonates with audiences worldwide.",
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
    bandMembers: [
      {
        name: "Alex Chen",
        role: "Lead Vocals, Synth",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Jordan Smith",
        role: "Guitar, Backing Vocals",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sam Rodriguez",
        role: "Bass, Electronics",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Taylor Kim",
        role: "Drums, Percussion",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    discography: [
      { title: "Digital Dreams", year: "2024", type: "Album" },
      { title: "Neon Nights", year: "2023", type: "EP" },
      { title: "Electric Pulse", year: "2022", type: "Single" },
    ],
  },
  2: {
    id: 2,
    name: "Midnight Collective",
    genre: "Jazz Fusion",
    members: 5,
    formed: "2021",
    image: "/bands/band_2.jpg",
    location: "Los Angeles, CA",
    heroImage: "/bands/band_2.jpg",
    bio: "Midnight Collective is a contemporary jazz ensemble that skillfully blends traditional jazz with modern influences and improvisation. Their sound is both sophisticated and accessible, creating an immersive experience for listeners with intricate arrangements and dynamic performances.",
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
    bandMembers: [
      {
        name: "Maya Singh",
        role: "Saxophone, Clarinet",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Leo Cruz",
        role: "Trumpet, Flugelhorn",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Noah Carter",
        role: "Piano, Keys",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Chloe Davis",
        role: "Upright Bass",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Ethan White",
        role: "Drums, Percussion",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    discography: [
      { title: "Rhythm & Resonance", year: "2024", type: "Album" },
      { title: "City Lights", year: "2023", type: "EP" },
      { title: "Fusion Point", year: "2022", type: "Single" },
    ],
  },
  3: {
    id: 3,
    name: "Neon Pulse",
    genre: "Synthwave",
    members: 3,
    formed: "2020",
    image: "/bands/band_3.jpg",
    location: "Austin, TX",
    heroImage: "/bands/band_3.jpg",
    bio: "Neon Pulse is a retro-futuristic electronic music trio, known for their nostalgic 80s vibes and modern production. Their sound transports listeners to a different era, evoking images of late-night drives and neon-lit cityscapes with shimmering synthesizers and driving rhythms.",
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
    bandMembers: [
      {
        name: "Lucas Gray",
        role: "Synthesizer, Production",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Mia Santos",
        role: "Vocals",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Aaron Lee",
        role: "Guitar, Synth",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    discography: [
      { title: "Retrowave Reverie", year: "2024", type: "Album" },
      { title: "Starlight Drive", year: "2022", type: "EP" },
      { title: "Future Nostalgia", year: "2021", type: "Single" },
    ],
  },
  4: {
    id: 4,
    name: "Urban Roots",
    genre: "Hip-Hop",
    members: 6,
    formed: "2018",
    image: "/bands/band_4.jpg",
    location: "Chicago, IL",
    heroImage: "/bands/band_4.jpg",
    bio: "Urban Roots is a conscious hip-hop collective dedicated to addressing social issues through powerful lyrics and beats. Since forming in 2018, the group has become a voice for their community, using their music to inspire change and tell authentic stories with a blend of classic and contemporary hip-hop.",
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
    bandMembers: [
      {
        name: "Jasmine Reed",
        role: "Lead Vocals, Rapper",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Kevin Miller",
        role: "Drums, Percussion",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "David Chen",
        role: "DJ, Turntables",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Sarah Kim",
        role: "Bass",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Michael O'Connell",
        role: "Guitar",
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        name: "Olivia Rodriguez",
        role: "Backing Vocals",
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
    discography: [
      { title: "Concrete Jungle", year: "2024", type: "Album" },
      { title: "Rhymes & Reasons", year: "2023", type: "EP" },
      { title: "Street Symphony", year: "2022", type: "Single" },
    ],
  },
};

export const BANDS = populateRandom(Object.values(BAND_DATA), 4);
