# React Gooey Cursor

<div align="center">
  <img src="/assets/demo.gif" alt="React Gooey Cursor Demo" style="width:100%; max-width:1200px;">
</div>

An animated gooey cursor effect for **React** — a trailing blob with a playful blob bloom, all blended together using an SVG filter.

## Features

- **Gooey SVG filter** — `feGaussianBlur` + `feColorMatrix` blend the blobs into a single fluid shape
- **Trailing blob** — a main blob with a slower, lagging trail eased via `requestAnimationFrame`
- **Blob bloom** — small particles randomly spawn around the cursor and fade out after 2 seconds
- **`mix-blend-difference`** — inverts colors underneath for that premium hover feel
- **Accessibility first** — fully disabled when the user prefers reduced motion
- **Zero dependencies** — just React, plain CSS custom properties, and an SVG filter

## Demo

Check out the live demo at [react-gooey-cursor.vercel.app](https://react-gooey-cursor.vercel.app/).

## Installation

### CLI

The component is published as a [shadcn/ui](https://ui.shadcn.com) registry item. Install it directly:

```bash
npx shadcn@latest add https://react-gooey-cursor.vercel.app/r/gooey-cursor.json
```

### Manual

Copy the following three files into your project:

| File                                  | Description                      |
| ------------------------------------- | -------------------------------- |
| `components/gooey-cursor.tsx`         | The cursor component             |
| `hooks/use-debounce.ts`               | Debounces the blob-spawn timing  |
| `hooks/use-prefers-reduced-motion.ts` | Detects `prefers-reduced-motion` |

## Usage

Add the component to your layout — it's a fixed, full-screen overlay so it works anywhere:

```tsx
import { GooeyCursor } from './components/gooey-cursor';

export function App() {
  return (
    <>
      <main>App</main>
      <GooeyCursor />
    </>
  );
}
```

## Required CSS

The effect relies on a few registered CSS custom properties, keyframes, and a theme color. Add the following to your global stylesheet:

```css
@layer base {
  .blob {
    scale: var(--scale);
    translate: var(--tx) var(--ty);
    @apply bg-cursor-background aspect-square rounded-full;
  }
  .blob.main,
  .blob.trail {
    transform: translate(-50%, -50%);
  }
  .animate-blob {
    animation: blob 1.5s linear forwards;
  }
  @keyframes blob {
    0% {
      --scale: 0.2;
    }
    40% {
      --scale: 1;
    }
    100% {
      --tx: 0;
      --ty: 0;
    }
  }
}

@property --tx {
  syntax: '<length>';
  initial-value: 0;
  inherits: false;
}

@property --ty {
  syntax: '<length>';
  initial-value: 0;
  inherits: false;
}

@property --scale {
  syntax: '<number>';
  initial-value: 1;
  inherits: false;
}
```

Then define the cursor color — the blobs use the `--cursor-background` CSS variable:

```css
:root {
  --cursor-background: #ededed;
}
```

For Tailwind v4, map the variable as a theme color:

```css
@theme inline {
  --color-cursor-background: var(--cursor-background);
}
```

## Customization

- **Color** — change `--cursor-background` to any value you like
- **Blob size** — adjust the `size-16` / `size-12` classes on the main and trail blobs
- **Bloom density** — tweak the spawn delay (300–900ms) and particle sizes in `gooey-cursor.tsx`
- **Smoothing** — tune the easing factors (`0.2` for the main blob, `0.08` for the trail) in the rAF loop

## Accessibility

The component respects `prefers-reduced-motion` and renders nothing when the user has reduced motion enabled, so no motion is ever forced on users who don't want it.

## Credits

Developed by [Sina Bayandorian](https://sina-byn.vercel.app/).
