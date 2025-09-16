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
    formed: string;
    image: string;
    social: Socials;
};
export type Artist = {
    [k in Exclude<keyof Band, "formed" | "genre" | "members">]: Band[k];
};
