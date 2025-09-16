import type { Config } from "tailwindcss";

export default <Partial<Config>>{
    theme: {},
    content: {
        files: [
            // all directories and extensions will correspond to your Nuxt config
            "{srcDir}/components/**/*.{vue,js,mjs,ts}",
            "{srcDir}/layouts/**/*.{vue,js,mjs,ts}",
            "{srcDir}/pages/**/*.{vue,js,mjs,ts}",
            "{srcDir}/{A,a}pp.{vue,js,mjs,ts}",
            "{srcDir}/{E,e}rror.{vue,js,mjs,ts}",
        ],
    },
};
