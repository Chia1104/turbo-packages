# @chiastack/ui

A React UI library based on Tailwind CSS and Radix UI ~~is available~~.

You can easily incorporate your own Tailwind config without any conflicts, and it comes with built-in support for `clsx` and `tailwind-merge`.

## Installation

```bash
pnpm add @chiastack/ui @chiastack/ui-utils @chiastack/tailwind-config framer-motion
```

## Configuration

You can import the configuration in your tailwind config file by using the following import statement:

### TypeScript

Make sure your tailwind version is at least 3.3.0.

```ts
import type { Config } from "tailwindcss"
import baseConfig, { animation } from "@chiastack/tailwind-config"

export default {
  // other config
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/@chiastack/ui/**/*.{js,ts,jsx,tsx}`,
  ],
  presets: [animation, baseConfig],
} satisfies Config
```

### JavaScript

```js
const baseConfig = require("@chiastack/tailwind-config")
const { animation } = require("@chiastack/tailwind-config")

module.exports = {
  // other config
  content: [
    `src/**/*.{js,ts,jsx,tsx}`,
    `node_modules/@chiastack/ui/**/*.{js,ts,jsx,tsx}`,
  ],
  presets: [animation, baseConfig],
}
```

## Usage

```tsx
import { Button } from "@chiastack/react-ui"

export default function App() {
  return <Button className="bg-gray-300">Click me!</Button>
}
```
