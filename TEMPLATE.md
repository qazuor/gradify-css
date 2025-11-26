# Template - Reusable Project Structure

This document describes the reusable parts of this project that can be copied to create new mini projects.

## Quick Start for New Project

1. Copy the entire project
2. Update `src/config/site.config.ts` with your project info
3. Update `src/icons/index.tsx` if you need different icons
4. Update `src/i18n/locales/en.json` and `es.json` with app-specific translations
5. Replace the contents of `src/components/gradient/` and `src/components/history/` with your app components
6. Update `src/App.tsx` with your app structure
7. Update `index.html` (title, meta tags, favicon, Google Fonts link)
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
All SVG icons include `role="img"` and `aria-hidden="true"` for accessibility.

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
├── ThemeToggle.tsx          # Theme toggle dropdown with animated icons
├── LanguageSelector.tsx     # Language selector dropdown
├── CopyButton.tsx           # Copy to clipboard button with animated feedback
└── AnimatedBackground.tsx   # Floating blob background animation
```

### Animated UI Components (animate-ui)
```
src/components/animate-ui/
├── icons/                   # Animated icon components using motion.svg
│   ├── icon.tsx             # Base icon wrapper with animation context
│   ├── check-check.tsx      # Animated checkmark
│   ├── chevron-down.tsx     # Animated chevron
│   ├── clipboard.tsx        # Animated clipboard
│   ├── clipboard-list.tsx   # Animated clipboard with list
│   ├── lightbulb.tsx        # Animated lightbulb
│   ├── link.tsx             # Animated link
│   ├── loader-pinwheel.tsx  # Animated loading spinner
│   ├── message-square-diff.tsx
│   ├── moon.tsx             # Animated moon (for theme toggle)
│   ├── rotate-ccw.tsx       # Animated rotate/reset
│   ├── settings.tsx         # Animated settings gear
│   ├── sliders-horizontal.tsx # Animated sliders
│   ├── sun.tsx              # Animated sun (for theme toggle)
│   └── trash-2.tsx          # Animated trash/delete
├── primitives/
│   ├── animate/
│   │   ├── tabs.tsx         # Animated tabs with sliding highlight
│   │   └── slot.tsx         # AsChild pattern support for motion components
│   └── effects/
│       └── highlight.tsx    # Highlight effect for active states
└── components/
    └── animate/
        └── tabs.tsx         # Pre-styled animated tabs component
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

### Hooks
```
src/hooks/
└── useDynamicAccent.ts      # Dynamic accent color based on content (e.g., gradient colors)
```

### Utilities
```
src/lib/
├── utils.ts                 # cn() utility for Tailwind classes
└── get-strict-context.tsx   # Type-safe React context factory
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
src/index.css                # Global styles with CSS variables, glassmorphism, custom classes
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

## CSS Classes & Design System

### Typography
The template uses **Space Grotesk** font. Include it in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">
```

### Glassmorphism
```html
<div class="glass-card">
  <!-- Frosted glass effect with blur and transparency -->
</div>
```

### Colored Shadows (Primary)
```html
<div class="shadow-primary-sm">Small colored shadow</div>
<div class="shadow-primary-md">Medium colored shadow</div>
<div class="shadow-primary-lg">Large colored shadow</div>
```

### Dynamic Accent Colors
Use `useDynamicAccent()` hook to dynamically change accent colors based on content:

```tsx
import { useDynamicAccent } from "@/hooks/useDynamicAccent";

function MyComponent() {
  useDynamicAccent(); // Automatically updates CSS variables

  return (
    <div className="dynamic-accent">
      {/* Elements here will use dynamic accent color */}
      <Button>Primary Button</Button>
    </div>
  );
}
```

Available dynamic shadow classes:
```html
<div class="shadow-dynamic-sm">Small dynamic shadow</div>
<div class="shadow-dynamic-md">Medium dynamic shadow</div>
```

### Asymmetric/Organic Borders
```html
<div class="rounded-organic">Organic border radius (1.5rem 0.75rem 1.5rem 0.75rem)</div>
<div class="rounded-organic-alt">Alt organic border radius (0.75rem 1.5rem 0.75rem 1.5rem)</div>
```

### Header Gradient
```html
<header class="header-gradient">
  <!-- Subtle gradient header background -->
</header>
```

## Animated Icons Usage

Animated icons use `motion/react` and provide hover/click animations:

```tsx
import { SunIcon } from "@/components/animate-ui/icons/sun";
import { MoonIcon } from "@/components/animate-ui/icons/moon";

function ThemeToggle() {
  return (
    <SunIcon
      size={20}
      animate="animate"           // or "default", "default-loop"
      onAnimationComplete={() => {}}
    />
  );
}
```

### Creating New Animated Icons

1. Create a new file in `src/components/animate-ui/icons/`
2. Use the icon wrapper pattern:

```tsx
"use client";

import { motion, type Variants } from "motion/react";
import {
  getVariants,
  type IconProps,
  IconWrapper,
  useAnimateIconContext,
} from "@/components/animate-ui/icons/icon";

type MyIconProps = IconProps<keyof typeof animations>;

const animations = {
  default: {
    path1: {
      initial: { pathLength: 1 },
      animate: { pathLength: [1, 0.5, 1], transition: { duration: 0.5 } },
    },
  } satisfies Record<string, Variants>,
} as const;

function IconComponent({ size, ...props }: MyIconProps) {
  const { controls } = useAnimateIconContext();
  const variants = getVariants(animations);

  return (
    <motion.svg
      role="img"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <motion.path
        d="M12 2v20"
        variants={variants.path1}
        initial="initial"
        animate={controls}
      />
    </motion.svg>
  );
}

function MyIcon(props: MyIconProps) {
  return <IconWrapper icon={IconComponent} {...props} />;
}

export { animations, MyIcon, type MyIconProps };
```

## Animated Tabs Usage

The template includes animated tabs with sliding highlight:

```tsx
import {
  Tabs,
  TabsList,
  TabsHighlight,
  TabsHighlightItem,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/animate-ui/primitives/animate/tabs";

function MyTabs() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList className="flex gap-2">
        <TabsHighlight className="bg-primary rounded-md">
          <TabsHighlightItem value="tab1">
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          </TabsHighlightItem>
          <TabsHighlightItem value="tab2">
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          </TabsHighlightItem>
        </TabsHighlight>
      </TabsList>
      <TabsContents>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </TabsContents>
    </Tabs>
  );
}
```

## Animated Background Usage

Add floating blob background to your layout:

```tsx
import { AnimatedBackground } from "@/components/common/AnimatedBackground";

function Layout({ children }) {
  return (
    <div className="relative">
      <AnimatedBackground />
      <main className="relative z-10">{children}</main>
    </div>
  );
}
```

## Type-Safe Context Factory

Use `getStrictContext` for type-safe React contexts:

```tsx
import { getStrictContext } from "@/lib/get-strict-context";

type MyContextType = {
  value: string;
  setValue: (v: string) => void;
};

const [MyProvider, useMyContext] = getStrictContext<MyContextType>("MyContext");

// Usage
function Parent() {
  const [value, setValue] = useState("");
  return (
    <MyProvider value={{ value, setValue }}>
      <Child />
    </MyProvider>
  );
}

function Child() {
  const { value, setValue } = useMyContext(); // Type-safe, throws if not in provider
  return <input value={value} onChange={(e) => setValue(e.target.value)} />;
}
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
│   │   ├── common/             # Reusable (theme, language, animated bg)
│   │   ├── layout/             # Reusable (header, footer, main layout)
│   │   ├── ui/                 # Reusable (shadcn)
│   │   ├── animate-ui/         # Reusable (animated icons, tabs, effects)
│   │   └── [your-feature]/     # App-specific
│   ├── config/
│   │   └── site.config.ts      # UPDATE THIS
│   ├── data/                   # App-specific data
│   ├── hooks/                  # Reusable + App-specific hooks
│   │   └── useDynamicAccent.ts # Dynamic accent color hook
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
│   │   ├── get-strict-context.tsx # Reusable
│   │   └── [your-utils].ts     # App-specific
│   ├── schemas/                # App-specific (Zod schemas)
│   ├── stores/                 # App-specific (Zustand stores)
│   ├── types/                  # App-specific
│   ├── App.tsx                 # App-specific
│   ├── main.tsx                # Reusable
│   ├── index.css               # Reusable (with custom classes)
│   └── vite-env.d.ts           # Reusable
├── test/                       # App-specific tests
├── biome.json                  # Reusable
├── components.json             # Reusable
├── index.html                  # Update title/meta/fonts
├── package.json                # Update name/description
├── tsconfig.json               # Reusable
├── vercel.json                 # Reusable (deployment + security)
├── vite.config.ts              # Reusable
└── vitest.config.ts            # Reusable
```

## Dependencies to Keep

When creating a new project, ensure these dependencies are included:

```json
{
  "dependencies": {
    "motion": "^11.x",           // For animated components
    "lucide-react": "^0.x",      // Icon library
    "@radix-ui/*": "^1.x",       // UI primitives (shadcn)
    "zustand": "^5.x",           // State management
    "i18next": "^24.x",          // Internationalization
    "react-i18next": "^15.x",
    "zod": "^3.x"                // Schema validation
  }
}
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

To add new static icons:

1. Add the SVG file to `src/icons/`
2. Create a React component in `src/icons/index.tsx`:

```tsx
export function MyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      aria-hidden="true"
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
