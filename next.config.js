/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
process.env.SKIP_ENV_VALIDATION = 'true';

await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    typescript: {
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

export default config;
