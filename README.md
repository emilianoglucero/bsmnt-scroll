# Basement Creative Dev Challenge — Main Submission

> **Trophy model rotates on scroll** using GSAP ScrollTrigger + r3f-scroll-rig DOM/WebGL sync.

| | |
|---|---|
| 🔗 **Repo** | [emilianoglucero/bsmnt-scroll](https://github.com/emilianoglucero/bsmnt-scroll) |
| 🚀 **Live Demo** | [bsmnt-scroll.vercel.app](https://bsmnt-scroll.vercel.app/) |
| 📖 **Documentation** | [docs/README.md](./docs/README.md) |

---

## Related

> 🧪 **Extra Challenge** — Trophy reacts to physics with `@react-three/rapier`:
> - Repo: [emilianoglucero/basement_2024-5](https://github.com/emilianoglucero/basement_2024-5)
> - Live: [basement-2024-5.vercel.app](https://basement-2024-5.vercel.app/)
> - Docs: [physics-implementation.md](https://github.com/emilianoglucero/basement_2024-5/blob/main/docs/extras/physics-implementation.md)

---

## Challenge Requirements

- Track DOM elements and draw Three.js objects in their place using correct scale and position (images and models)
- Implement Lenis for smooth and accessible scrolling
- Add a custom shader to make hover image interaction more engaging
- **Make the Awwwards model rotate during scroll movement** ← main trophy feature
- Pin the Caps section and animate caps with opacity, scale, and rotation on scroll
- Ensure responsiveness up to iPad

## Stack

- [TypeScript](https://www.typescriptlang.org/)
- [Next.js](https://nextjs.org/)
- [@react-three/fiber](https://github.com/pmndrs/react-three-fiber)
- [@react-three/drei](https://github.com/pmndrs/drei)
- [@14islands/r3f-scroll-rig](https://github.com/14islands/r3f-scroll-rig)
- [gsap](https://gsap.com/) + ScrollTrigger
- [@studio-freight/lenis](https://github.com/studio-freight/lenis)
- [zustand](https://zustand.docs.pmnd.rs/)

## Development

1. Install pnpm:

   ```bash
   npm install -g pnpm
   ```

2. Install dependencies:

   ```bash
   pnpm i --frozen-lockfile
   ```

3. Start dev server:

   ```bash
   pnpm dev
   ```
