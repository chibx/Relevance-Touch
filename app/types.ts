type Socials = {
    instagram?: boolean;
    spotify?: boolean;
    youtube?: boolean;
    audioMack?: boolean;
    appleMusic?: boolean;
    boomplay?: boolean;
};

export type Band = {
    id: number;
    name: string;
    genre: string;
    description: string;
    members: number;
    image: string;
    social: Socials;
};

export type Artist = {
    [k in Exclude<keyof Band, "genre" | "members">]: Band[k];
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
