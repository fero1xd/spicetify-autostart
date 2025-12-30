# spicetify-autostart

A **Spicetify extension** that automatically starts playing music when Spotify launches. This is useful if you want Spotify to immediately resume playback without manual interaction every time you open the app.

**Build Instructions**

Install dependencies:

```bash
bun install
```

Build the extension:

```bash
bun run build
```

The build command will automatically copy the built file to your **Spicetify config extensions directory** and run `spicetify apply` so the extension is enabled immediately

If you want to change the Spicetify config directory path, you can update it in:

- `tsdown.config.ts`

---

This project was created using `bun init` with [Bun](https://bun.com), a fast all‑in‑one JavaScript runtime.
