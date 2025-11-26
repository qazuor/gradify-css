# Template - Reusable Project Structure

This document describes the reusable parts of this project that can be copied to create new mini projects.

## Quick Start for New Project

1. Copy the entire project
2. Update `src/config/site.config.ts` with your project info
3. Update `src/icons/index.tsx` if you need different icons
4. Update `src/i18n/locales/en.json` and `es.json` with app-specific translations
5. Replace the contents of `src/components/gradient/` and `src/components/history/` with your app components
6. Update `src/App.tsx` with your app structure
7. Update `index.html` (title, meta tags, favicon)
8. Update `README.md`
9. Update `package.json` (name, description)

## Reusable Files (Copy as-is)

### Configuration
```
src/config/site.config.ts    # Site configuration - UPDATE THIS FOR EACH PROJECT
```

### Custom Icons
```
src/icons/
├── index.tsx                # Icon components (GitHub, LinkedIn, BuyMeACoffee, Fiverr, Upwork)
├── github.svg               # SVG source files
├── linkedin.svg
├── buymeacoffe.svg
├── fiverr.svg
└── upwork.svg
```

Icons use `fill="currentColor"` for automatic theme adaptation (black in light mode, white in dark mode).

### Layout Components
```
src/components/layout/
├── Header.tsx               # App header with logo, author link, theme & language
├── Footer.tsx               # Footer with social links, tech stack
└── MainLayout.tsx           # Main layout wrapper with h-dvh
```

### Common Components
```
src/components/common/
├── ThemeProvider.tsx        # Dark/Light theme context
├── ThemeToggle.tsx          # Theme toggle dropdown
├── LanguageSelector.tsx     # Language selector dropdown
└── CopyButton.tsx           # Copy to clipboard button
```

### UI Components (shadcn/ui)
```
src/components/ui/           # All shadcn/ui components
├── button.tsx
├── card.tsx
├── dropdown-menu.tsx
├── input.tsx
├── label.tsx
├── popover.tsx
├── scroll-area.tsx
├── separator.tsx
├── slider.tsx
├── tabs.tsx
└── tooltip.tsx
```

### Internationalization
```
src/i18n/
├── config.ts                # i18n configuration (uses siteConfig)
└── locales/
    ├── base/                # REUSABLE - Base translations
    │   ├── en.json          # Theme, language, actions, footer
    │   └── es.json
    ├── en.json              # APP-SPECIFIC translations
    └── es.json
```

### Styling
```
src/index.css                # Global styles with CSS variables for theming
src/lib/utils.ts             # cn() utility for Tailwind classes
```

### Testing
```
test/setup.ts                # Vitest setup
vitest.config.ts             # Vitest configuration
```

### CI/CD & Deployment
```
.github/workflows/ci.yml     # GitHub Actions workflow (lint, typecheck, test, build)
vercel.json                  # Vercel deployment config with security headers
```

### Build Configuration
```
biome.json                   # Biome linter/formatter config
components.json              # shadcn/ui config
tsconfig.json                # TypeScript config
tsconfig.app.json
tsconfig.node.json
vite.config.ts               # Vite config
```

## Site Configuration (`src/config/site.config.ts`)

This is the main file to update for each new project:

```typescript
import { Palette } from "lucide-react";
import { GithubIcon, LinkedinIcon, BuyMeACoffeeIcon, FiverrIcon, UpworkIcon } from "@/icons";

export const siteConfig: SiteConfig = {
  app: {
    name: "Your App Name",
    description: "Your app description",
    icon: Palette,  // Import from lucide-react
  },

  author: {
    name: "qazuor",
    url: "https://qazuor.com",
    location: "Entre Rios, Argentina",
  },

  socialLinks: [
    { name: "GitHub", url: "https://github.com/qazuor", icon: GithubIcon },
    { name: "LinkedIn", url: "https://linkedin.com/in/qazuor", icon: LinkedinIcon },
    { name: "Buy me a coffee", url: "https://buymeacoffee.com/qazuor", icon: BuyMeACoffeeIcon },
  ],

  freelanceLinks: [
    { name: "Fiverr", url: "https://www.fiverr.com/sellers/...", icon: FiverrIcon },
    { name: "Upwork", url: "https://www.upwork.com/freelancers/...", icon: UpworkIcon },
  ],

  techStack: ["React", "TypeScript", "Tailwind", "shadcn/ui", "Zustand", "Vite"],
  mobileTechStack: ["React", "TypeScript", "Tailwind"],

  storage: {
    language: "yourapp-language",
    theme: "yourapp-theme",
    history: "yourapp-history",
    // Add more keys as needed
  },

  languages: [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ],
};
```

## Base Translations (`src/i18n/locales/base/`)

These translations are shared across all projects:

- `theme.toggle`, `theme.light`, `theme.dark`, `theme.system`
- `language.select`
- `actions.copy`, `actions.copied`, `actions.reset`, `actions.save`, `actions.cancel`, `actions.delete`, `actions.edit`, `actions.close`, `actions.apply`, `actions.clear`
- `common.loading`, `common.error`, `common.success`, `common.empty`
- `footer.madeWith`, `footer.using`

## App-Specific Translations (`src/i18n/locales/`)

Update these files with your app-specific translations:

```json
{
  "app": {
    "title": "Your App Title",
    "description": "Your app description"
  },
  "tabs": { ... },
  "yourFeature": { ... }
}
```

## Project Structure

```
your-project/
├── .github/workflows/ci.yml    # CI/CD
├── public/
├── src/
│   ├── components/
│   │   ├── common/             # Reusable
│   │   ├── layout/             # Reusable
│   │   ├── ui/                 # Reusable (shadcn)
│   │   └── [your-feature]/     # App-specific
│   ├── config/
│   │   └── site.config.ts      # UPDATE THIS
│   ├── data/                   # App-specific data
│   ├── i18n/
│   │   ├── config.ts           # Reusable
│   │   └── locales/
│   │       ├── base/           # Reusable
│   │       ├── en.json         # App-specific
│   │       └── es.json         # App-specific
│   ├── icons/                  # Reusable (custom SVG icons)
│   │   └── index.tsx
│   ├── lib/
│   │   ├── utils.ts            # Reusable
│   │   └── [your-utils].ts     # App-specific
│   ├── schemas/                # App-specific (Zod schemas)
│   ├── stores/                 # App-specific (Zustand stores)
│   ├── types/                  # App-specific
│   ├── App.tsx                 # App-specific
│   ├── main.tsx                # Reusable
│   ├── index.css               # Reusable
│   └── vite-env.d.ts           # Reusable
├── test/                       # App-specific tests
├── biome.json                  # Reusable
├── components.json             # Reusable
├── index.html                  # Update title/meta
├── package.json                # Update name/description
├── tsconfig.json               # Reusable
├── vercel.json                 # Reusable (deployment + security)
├── vite.config.ts              # Reusable
└── vitest.config.ts            # Reusable
```

## Security Headers (vercel.json)

The project includes security headers configured for Vercel deployment:

- **X-Content-Type-Options**: `nosniff` - Prevents MIME sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking
- **X-XSS-Protection**: `1; mode=block` - Legacy XSS protection
- **Referrer-Policy**: `strict-origin-when-cross-origin` - Controls referrer info
- **Permissions-Policy**: Disables camera, microphone, geolocation, FLoC
- **Strict-Transport-Security**: Forces HTTPS (HSTS)
- **Content-Security-Policy**: Controls resource sources
- **Cache-Control**: Immutable caching for static assets

## Adding New Languages

1. Add the language to `siteConfig.languages` in `site.config.ts`
2. Create `src/i18n/locales/base/[lang].json` (copy from en.json)
3. Create `src/i18n/locales/[lang].json` (app-specific translations)
4. Import and add to resources in `src/i18n/config.ts`

## Adding New Storage Keys

Add new keys to `siteConfig.storage` and use them in your stores:

```typescript
// site.config.ts
storage: {
  language: "myapp-language",
  theme: "myapp-theme",
  history: "myapp-history",
  settings: "myapp-settings",  // New key
}

// myStore.ts
import { siteConfig } from "@/config/site.config";

persist(
  (set) => ({ ... }),
  { name: siteConfig.storage.settings }
)
```

## Adding Custom Icons

To add new icons:

1. Add the SVG file to `src/icons/`
2. Create a React component in `src/icons/index.tsx`:

```tsx
export function MyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"  // Important for theme adaptation
      {...props}
    >
      <path d="..." />
    </svg>
  );
}
```

3. Use it in `site.config.ts`:

```typescript
import { MyIcon } from "@/icons";

socialLinks: [
  { name: "My Platform", url: "https://...", icon: MyIcon },
],
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Vite and use `vercel.json` settings
4. No additional configuration needed

The `vercel.json` file configures:
- Build command: `pnpm build`
- Install command: `pnpm install`
- Output directory: `dist`
- Security headers (automatically applied)
