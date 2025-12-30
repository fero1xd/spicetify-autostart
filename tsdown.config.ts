import { defineConfig } from "tsdown";
import { $ } from "bun";

export default defineConfig({
  entry: ["./src/index.tsx"],
  format: "cjs",
  outDir: "build",
  platform: "node",
  noExternal: [/^(?:@)?effect(?:\/.*)?$/],
  hooks: {
    "build:done": async (ctx) => {
      const file = ctx.chunks[0]!;
      await $`cp ${file.outDir}/${file.fileName} ~/.config/spicetify/Extensions/spicetify-autostart.js`;
      await $`spicetify apply`;
    },
  },
});
