import type { Artist } from "~/types";

export const ARTISTS = [
  {
    id: 1,
    name: "Sarah Chen",
    genre: "Pop/R&B",
    experience: "4 years",
    description:
      "Multi-platinum recording artist with a soulful voice and contemporary style.",
    image: "/artists/artist_1.jpg",
    location: "Los Angeles, CA",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    genre: "Hip-Hop/Rap",
    experience: "5 years",
    description:
      "Award-winning rapper and producer known for innovative beats and lyrics.",
    image: "/artists/artist_2.jpg",
    location: "Atlanta, GA",
  },
  {
    id: 3,
    name: "Luna Park",
    genre: "Indie/Alternative",
    experience: "3 years",
    description:
      "Singer-songwriter creating atmospheric indie music with electronic elements.",
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
    description:
      "Electronic music producer and DJ specializing in progressive house and ambient soundscapes.",
  },
  {
    id: 5,
    name: "Emma Thompson",
    genre: "Folk",
    experience: "4 years",
    location: "Nashville, TN",
    image: "/artists/artist_5.jpg",
    description:
      "Folk singer-songwriter with a powerful voice and storytelling ability rooted in traditional American music.",
  },
  {
    id: 6,
    name: "Jordan Kim",
    genre: "Jazz",
    experience: "10 years",
    location: "New York, NY",
    image: "/artists/artist_6.jpg",
    description:
      "Accomplished jazz pianist and composer known for innovative arrangements and collaborative performances.",
  },
];

export const ARTISTS_DATA: Record<number, Artist> = {
  1: {
    id: 1,
    name: "Sarah Chen",
    genre: "Pop/R&B",
    experience: "4 years",
    location: "Los Angeles, CA",
    image: "/artists/artist_1.jpg",
    heroImage: "/placeholder.svg?height=500&width=1200",
    description: "Gospel singer and producer known for spirit filled songs.",
    bio: "Sarah Chen is a multi-platinum recording artist whose soulful voice and contemporary style have captivated audiences worldwide. With over 8 years in the industry, she has established herself as one of the most versatile and dynamic performers of her generation.",
    journey:
      "Starting her career as a backup vocalist, Sarah quickly rose through the ranks with her powerful voice and magnetic stage presence. Her debut album 'Midnight Dreams' topped the charts and earned her multiple Grammy nominations, setting the stage for a remarkable career that continues to evolve.",
    achievements: [
      "3x Grammy Award Winner",
      "Multi-platinum selling artist",
      "Billboard Music Award for Best R&B Artist",
      "Over 50 million streams worldwide",
      "Headlined major festivals including Coachella and Lollapalooza",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
  2: {
    id: 2,
    name: "Marcus Rodriguez",
    genre: "Hip-Hop/Rap",
    experience: "5 years",
    description:
      "Award-winning rapper and producer known for innovative beats and lyrics.",
    image: "/artists/artist_2.jpg",
    location: "Atlanta, GA",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Marcus Rodriguez, also known as 'M-Rod,' is a groundbreaking artist in the hip-hop scene. His work is characterized by complex lyrical narratives and a unique fusion of traditional hip-hop with electronic and experimental sounds. He is a prolific producer, often creating the beats for his own tracks and those of other major artists.",
    journey:
      "Hailing from Atlanta, Marcus started his career producing mixtapes for local artists. His breakout moment came with the single 'Urban Pulse,' which went viral and showcased his talent as both a rapper and a producer. Since then, he has consistently pushed the boundaries of the genre, earning critical acclaim and a dedicated global fanbase.",
    achievements: [
      "Grammy Award for Best Rap Album",
      "BET Hip Hop Award for Producer of the Year",
      "Certified Gold Album: 'Street Symphony'",
      "Collaborated with top artists including Kendrick Lamar and J. Cole",
      "Sold-out national tour in 2024",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
  3: {
    id: 3,
    name: "Luna Park",
    genre: "Indie/Alternative",
    experience: "3 years",
    description:
      "Singer-songwriter creating atmospheric indie music with electronic elements.",
    image: "/artists/artist_3.jpg",
    location: "Portland, OR",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Luna Park is a Portland-based singer-songwriter known for her ethereal vocals and dreamy soundscapes. Her music blends traditional indie sensibilities with subtle electronic textures, creating a unique and introspective listening experience. Her lyrical themes often explore nature, dreams, and human connection.",
    journey:
      "Luna began her musical journey playing in small cafes and open mic nights. Her self-released EP, 'Whispers in the Woods,' caught the attention of independent music blogs, leading to a record deal. She has since toured with renowned indie bands and built a loyal following through her authentic and heartfelt performances.",
    achievements: [
      "Named 'Breakthrough Artist of the Year' by Indie Sounds Magazine",
      "Headlined the 'Forest Festival' in Oregon",
      "Nominated for the 'Libera Award' for Best Folk/Americana Album",
      "Featured on major Spotify playlists including 'Fresh Finds' and 'Indie Folk'",
      "Viral hit single 'Golden Haze' with over 10 million streams",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      youtube: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
  4: {
    id: 4,
    name: "Alex Rivera",
    genre: "Electronic",
    experience: "7 years",
    location: "Miami, FL",
    image: "/artists/artist_4.jpg",
    description:
      "Electronic music producer and DJ specializing in progressive house and ambient soundscapes.",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Alex Rivera is a celebrated electronic music producer and DJ, whose career is defined by innovative sound design and an ability to craft immersive sonic journeys. Based in Miami, he has become a staple in the global electronic music scene, known for his dynamic live sets and sophisticated studio productions.",
    journey:
      "Alex started as a club DJ, mastering the art of the mix and the crowd. His early productions, released on underground labels, showcased a unique blend of progressive house and ambient soundscapes. This led to a residency at a major Miami club and invitations to perform at international festivals, cementing his reputation as a master of his craft.",
    achievements: [
      "Ranked in DJ Mag's 'Top 100 DJs'",
      "Won 'Best New Producer' at the International Dance Music Awards",
      "Headlined major festivals including Ultra Music Festival and Tomorrowland",
      "His track 'Ethereal' topped the Beatport charts for six consecutive weeks",
      "Launched his own record label, 'Aether Sounds'",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      soundcloud: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
  5: {
    id: 5,
    name: "Emma Thompson",
    genre: "Folk",
    experience: "4 years",
    location: "Nashville, TN",
    image: "/artists/artist_5.jpg",
    description:
      "Folk singer-songwriter with a powerful voice and storytelling ability rooted in traditional American music.",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Emma Thompson is a folk singer-songwriter from Nashville, TN, renowned for her soulful voice and profound storytelling. Her music is deeply rooted in the traditions of American folk and bluegrass, yet she infuses it with a modern sensibility, creating timeless songs that resonate with a wide audience.",
    journey:
      "Growing up in a family of musicians, Emma was immersed in folk and bluegrass from a young age. She honed her craft performing at local venues, where her raw talent and authentic sound quickly gained recognition. Her debut album, 'Echoes of the Valley,' was a critical success, earning her a nomination for a major folk music award and leading to sold-out shows across the country.",
    achievements: [
      "Nominated for 'Emerging Artist of the Year' at the Americana Music Awards",
      "Featured on NPR's 'Tiny Desk Concerts'",
      "Top-selling folk album on Bandcamp for 2023",
      "Performed at the Grand Ole Opry",
      "Her song 'River's End' was featured in a major film soundtrack",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      facebook: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
  6: {
    id: 6,
    name: "Jordan Kim",
    genre: "Jazz",
    experience: "10 years",
    location: "New York, NY",
    image: "/artists/artist_6.jpg",
    description:
      "Accomplished jazz pianist and composer known for innovative arrangements and collaborative performances.",
    heroImage: "/placeholder.svg?height=500&width=1200",
    bio: "Jordan Kim is an acclaimed jazz pianist and composer from New York, NY. With a decade of professional experience, he is celebrated for his technical virtuosity and creative approach to traditional jazz forms. His work often features intricate arrangements and unexpected improvisations that push the genre's boundaries.",
    journey:
      "After graduating from the prestigious Juilliard School, Jordan began his career performing in renowned jazz clubs throughout New York City. His unique style and collaborative spirit led to high-profile performances with legendary jazz artists. His recent album 'Kinetic' has been praised for its bold vision and masterful execution, solidifying his place as a leading figure in contemporary jazz.",
    achievements: [
      "DownBeat Magazine 'Rising Star' Award",
      "Performed at the Lincoln Center with the Jazz at Lincoln Center Orchestra",
      "Nominated for a Grammy Award for 'Best Jazz Instrumental Album'",
      "Held a residency at the iconic Village Vanguard",
      "His latest album 'Kinetic' was named 'Jazz Album of the Year' by Jazz Times",
    ],
    socials: {
      instagram: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      spotify: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
      youtube: "https://open.spotify.com/artist/76D34AFU39hprElLWR448w",
    },
  },
};
