import type { Socials, ArtistWork } from "~/types";
import { artistWorks } from "./mock/work";

/** [url, iconName, normalClass, hoverClass] */
type CompactSocialInfo = readonly [string, string, string];

const SOCIALS: { [index in keyof Socials]: string } = {
  instagram: "/icons/instagram.png",
  facebook: "/icons/facebook.png",
  spotify: "/icons/spotify.webp",
  audioMack: "/icons/audiomack.png",
  appleMusic: "/icons/apple-music.png",
  youtube: "/icons/youtube.webp",
  boomplay: "/icons/boomplay.webp",
};

export function socialsToIcon(socials: string) {
  const details = SOCIALS[socials as keyof Socials];
  return details;
}

export function populateRandom<T>(arr: T[], num = 1) {
  if (arr.length < num) return [];
  const res: T[] = [];

  for (let i = 0; i < num; i++) {
    res[i] = arr[i]!;
  }

  return res;
}

export function getArtistWork(id: number) {
  return artistWorks[id];
}

export function delay(del: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, del);
  });
}
