import { defineConfig } from "umi";

export default defineConfig({
  alias: {
    "@": "/src",
  },
  hash: true,
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: "@/pages" },
    { path: "/waterfall", component: "@/pages/waterfall" },
    { path: "/scaling", component: "@/pages/scaling" },
  ],
  npmClient: "pnpm",

  base: "/test/",
});
