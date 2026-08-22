import { core, sveltekit as svkit, typed, viteplus } from "@fnko/config/oxlint";
import { defineConfig, lazyPlugins } from "vite-plus";
import adapter from "@sveltejs/adapter-cloudflare";
import { mdsvex } from "mdsvex";
import { sveltekit } from "@sveltejs/kit/vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

export default defineConfig({
  fmt: {
    svelte: true,
  },
  lint: {
    extends: [core, typed, svkit, viteplus],
  },
  staged: {
    "*": "vp check --fix",
  },
  plugins: lazyPlugins(() => [
    enhancedImages(),
    sveltekit({
      adapter: adapter(),
      preprocess: [mdsvex({ extensions: [".md"] })],
      extensions: [".svelte", ".md"],
    }),
  ]),
});
