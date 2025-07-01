# Package Management Guide

This project uses **pnpm** as the package manager.

## ⚠️ Important

**Do NOT use npm commands**. This project is configured for pnpm and using npm will cause conflicts.

## Correct Commands

### Install all dependencies

```bash
pnpm install
```

### Add a new package

```bash
pnpm add <package-name>
```

### Add a dev dependency

```bash
pnpm add -D <package-name>
```

### Remove a package

```bash
pnpm remove <package-name>
```

### Run scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm run start    # Start production server
```

## Why pnpm?

-   Faster installations
-   Saves disk space through hard linking
-   Stricter dependency resolution
-   Already configured in this project

## Font Usage

If you need to use fonts, import from `next/font` (not the deprecated `@next/font`):

```jsx
import { Inter } from "next/font/google";
```
