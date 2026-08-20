import type { MetadataRoute } from "next";
import { rooms } from "@/data/rooms";
const root = "https://hotel-central-birobidzhan.mariahhihh.chatgpt.site";
export default function sitemap(): MetadataRoute.Sitemap { return ["", "/booking", "/privacy", ...rooms.map((room) => `/rooms/${room.slug}`)].map((path) => ({ url: `${root}${path}`, lastModified: new Date("2026-08-20") })); }
