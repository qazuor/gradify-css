# Template - Reusable Project Structure

This document describes the reusable parts of this project that can be copied to create new mini projects.

## Quick Start for New Project

1. Copy the entire project
2. Update `src/config/site.config.ts` with your project info
3. Update `src/i18n/locales/en.json` and `es.json` with app-specific translations
4. Replace the contents of `src/components/gradient/` and `src/components/history/` with your app components
5. Update `src/App.tsx` with your app structure
6. Update `README.md`

## Reusable Files (Copy as-is)

### Configuration
```
src/config/site.config.ts    # Site configuration - UPDATE THIS FOR EACH PROJECT
```

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
    │   ├── en.json          # Theme, language, common actions
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

### CI/CD
```
.github/workflows/ci.yml     # GitHub Actions workflow
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
export const siteConfig: SiteConfig = {
  app: {
    name: "Your App Name",
    description: "Your app description",
    icon: YourIcon,  // Import from lucide-react
  },

  author: {
    name: "qazuor",
    url: "https://qazuor.com",
    location: "Entre Rios, Argentina",
  },

  socialLinks: [...],      // Your social links
  freelanceLinks: [...],   // Your freelance platform links

  techStack: [...],        // Full tech stack for desktop footer
  mobileTechStack: [...],  // Reduced tech stack for mobile

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
├── .github/workflows/ci.yml
├── public/
├── src/
│   ├── components/
│   │   ├── common/          # Reusable
│   │   ├── layout/          # Reusable
│   │   ├── ui/              # Reusable (shadcn)
│   │   └── [your-feature]/  # App-specific
│   ├── config/
│   │   └── site.config.ts   # UPDATE THIS
│   ├── data/                # App-specific data
│   ├── i18n/
│   │   ├── config.ts        # Reusable
│   │   └── locales/
│   │       ├── base/        # Reusable
│   │       ├── en.json      # App-specific
│   │       └── es.json      # App-specific
│   ├── lib/
│   │   ├── utils.ts         # Reusable
│   │   └── [your-utils].ts  # App-specific
│   ├── schemas/             # App-specific (Zod schemas)
│   ├── stores/              # App-specific (Zustand stores)
│   ├── types/               # App-specific
│   ├── App.tsx              # App-specific
│   ├── main.tsx             # Reusable
│   ├── index.css            # Reusable
│   └── vite-env.d.ts        # Reusable
├── test/                    # App-specific tests
├── biome.json               # Reusable
├── components.json          # Reusable
├── index.html               # Update title
├── package.json             # Update name/description
├── tsconfig.json            # Reusable
├── vite.config.ts           # Reusable
└── vitest.config.ts         # Reusable
```

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
