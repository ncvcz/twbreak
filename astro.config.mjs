// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://twbreak.vcz.me",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: cloudflare(),
});