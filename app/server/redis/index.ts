import { createClientPool } from "@redis/client";
import { Repository } from "redis-om";
import { artistSchema, bandSchema } from "./schema";

const redis = createClientPool({
    url: process.env.REDIS_URL,
});

await redis.connect();

export const artistRepo = new Repository(artistSchema, redis as any);
export const bandRepo = new Repository(bandSchema, redis as any);
