export type Socials = {
  instagram?: string;
  facebook?: string;
  spotify?: string;
  youtube?: string;
  appleMusic?: string;
  boomplay?: string;
  soundcloud?: string;
  audioMack?: string;
};

export type Artist = {
  [k in Exclude<
    keyof Band,
    "members" | "bandMembers" | "discography" | "formed"
  >]: Band[k];
} & {
  experience: string;
  location: string;
  journey: string;
  achievements: string[];
  description: string;
};

export type ArtistWork = {
  id: number;
  title: string;
  type: string;
  year: string;
  thumbnail: string;
};

export type Works = {
  id: number;
  title: string;
  genre?: string;
  year?: string;
  duration?: string;
  artist: string;
  type: string;
  thumbnail: string;
  description: string;
  credits: Record<string, string>;
};

export type Band = {
  id: number;
  name: string;
  genre: string;
  // description: string;
  members: number;
  image: string;
  heroImage: string;
  bio: string;
  formed: string;
  location: string;
  bandMembers: BandMember[];
  socials: Socials;
  discography: Discography[];
};

export type BandMember = {
  name: string;
  role: string;
  image: string;
};

export type Discography = {
  title: string;
  year: string;
  type: "Single" | "Album" | "EP";
};
