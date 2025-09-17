import { Schema } from "redis-om";
import type { Artist, Band } from "~/types";

export const artistSchema = new Schema<Artist>("artist", {
    id: {
        type: "number",
        field: "artist_id",
    },
    name: {
        type: "string",
        field: "artist_name",
    },
    description: {
        type: "text",
        field: "artist_description",
    },
    image: {
        type: "string",
        field: "artist_image",
    },
    social: {
        type: "text",
        field: "artist_socials",
    },
});

export const bandSchema = new Schema<Band>("band", {
    id: {
        type: "number",
        field: "band_id",
    },
    name: {
        type: "string",
        field: "band_name",
    },
    description: {
        type: "text",
        field: "band_description",
    },
    image: {
        type: "string",
        field: "band_image",
    },
    social: {
        type: "text",
        field: "band_socials",
    },
    members: {
        type: "string[]",
        field: "band_members",
    },
    genre: {
        type: "string",
        field: "band_genre",
    },
});
