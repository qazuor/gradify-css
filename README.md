# Gradify CSS

A modern, feature-rich CSS gradient generator built with React and TypeScript. Create beautiful linear, radial, and conic gradients with an intuitive interface and real-time preview.

## Demo

🌐 **Live Demo**: [gradify-css.vercel.app](https://gradify-css.vercel.app)

## Features

### Core Functionality

- **Multiple Gradient Types**: Create Linear, Radial, and Conic gradients
- **Real-time Preview**: See your gradient changes instantly as you edit
- **Color Stop Editor**: Add, remove, and customize unlimited color stops with precise position control
- **Angle Control**: Visual angle selector for linear and conic gradients (0-360°)
- **Radial Controls**: Shape (circle/ellipse) and position controls for radial gradients
- **One-Click Copy**: Copy generated CSS to clipboard instantly
- **Randomize**: Generate random gradients for inspiration
- **History**: Automatically saves your created gradients (persisted in localStorage)
- **Preset Library**: 15+ beautiful preset gradients organized in 4 categories:
  - 🌅 Sunset
  - 🌊 Ocean
  - 🌿 Nature
  - 💜 Neon

### User Experience

- **Help Dialog**: Built-in help button with step-by-step usage instructions
- **Dark/Light Theme**: Toggle between dark and light modes (persisted)
- **Internationalization**: Available in English and Spanish
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Keyboard Accessible**: Full keyboard navigation support

### UI/UX Enhancements

- **Animated Icons**: Custom animated SVG icons with hover/tap interactions using [animate-ui](https://animate-ui.com/)
- **Glassmorphism Design**: Frosted glass effect cards with backdrop blur
- **Animated Background**: Floating gradient blobs with smooth animations
- **Dynamic Accent Colors**: UI accent color adapts to the current gradient colors
- **Animated Tabs**: Smooth sliding highlight between tab selections
- **Custom Typography**: Space Grotesk font for a modern, technical look

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | [React 19](https://react.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Build Tool | [Vite 7](https://vite.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| UI Components | [shadcn/ui](https://ui.shadcn.com/) |
| Animations | [Motion](https://motion.dev/) + [animate-ui](https://animate-ui.com/) |
| State Management | [Zustand](https://zustand.docs.pmnd.rs/) |
| Validation | [Zod](https://zod.dev/) |
| i18n | [react-i18next](https://react.i18next.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Linting | [Biome](https://biomejs.dev/) |
| Testing | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/qazuor/gradify-css.git
cd gradify-css

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

The app will be available at `http://localhost:5173`

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with HMR |
| `pnpm build` | Type-check and build for production |
| `pnpm preview` | Preview production build locally |
| `pnpm lint` | Run Biome linter |
| `pnpm format` | Format code with Biome |
| `pnpm check` | Run Biome check (lint + format) with auto-fix |
| `pnpm test` | Run tests in watch mode |
| `pnpm test:run` | Run tests once |
| `pnpm test:coverage` | Run tests with coverage report |

## Usage

1. **Select Gradient Type**: Choose between Linear, Radial, or Conic gradient from the type selector
2. **Adjust Angle/Position**: Use the visual controls to set the gradient direction or center position
3. **Edit Color Stops**:
   - Click "Add Color Stop" to add more colors
   - Drag the slider to adjust each color's position
   - Click the color box to open the color picker
   - Click the trash icon to remove a color stop
4. **Copy CSS**: Click the "Copy CSS" button to copy the generated code to your clipboard
5. **Browse Presets**: Check the "Inspiration" tab for beautiful preset gradients - click any to load it
6. **View History**: Access your previously created gradients in the "History" tab

> 💡 **Tip**: Click the help button (?) in the header for a quick guide on how to use the app!

## Project Structure

```
src/
├── components/
│   ├── animate-ui/       # Animated UI components and icons
│   │   ├── components/   # Animated compound components
│   │   ├── icons/        # Animated SVG icons
│   │   └── primitives/   # Animation primitives
│   ├── common/           # Shared components (ThemeToggle, CopyButton, etc.)
│   ├── gradient/         # Gradient-specific components
│   │   ├── AngleSelector.tsx
│   │   ├── ColorStopEditor.tsx
│   │   ├── CSSOutput.tsx
│   │   ├── GradientControls.tsx
│   │   ├── GradientPreview.tsx
│   │   ├── GradientTypeSelector.tsx
│   │   ├── PresetsPanel.tsx
│   │   └── RadialControls.tsx
│   ├── history/          # History panel components
│   ├── layout/           # Layout components (Header, Footer, MainLayout)
│   └── ui/               # shadcn/ui components
├── config/               # Site configuration
├── data/                 # Static data (gradient presets)
├── hooks/                # Custom React hooks
├── i18n/                 # Internationalization
│   └── locales/          # Translation files (en.json, es.json)
├── icons/                # Custom SVG icons
├── lib/                  # Utility functions
├── schemas/              # Zod validation schemas
├── stores/               # Zustand stores
│   ├── gradientStore.ts  # Current gradient state
│   ├── historyStore.ts   # Gradient history (persisted)
│   └── uiStore.ts        # UI state (active tab)
└── types/                # TypeScript type definitions
```

## Configuration

The app can be customized via `src/config/site.config.ts`:

```typescript
export const siteConfig = {
  app: {
    name: "Gradify CSS",
    description: "CSS Gradient Generator",
    icon: Palette,
  },
  author: {
    name: "qazuor",
    url: "https://qazuor.com",
  },
  // ... more options
};
```

## Using as a Template

This project is designed to be reusable as a template for new React projects. See [TEMPLATE.md](./TEMPLATE.md) for detailed instructions on:

- How to customize the configuration
- Adding new languages
- Extending the component library
- Best practices for state management

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Commit Convention

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## Author

**qazuor** - [qazuor.com](https://qazuor.com)

- GitHub: [@qazuor](https://github.com/qazuor)
- LinkedIn: [qazuor](https://linkedin.com/in/qazuor)

## Support

If you find this project helpful, consider:

- ⭐ Starring the repository
- ☕ [Buying me a coffee](https://buymeacoffee.com/qazuor)

## License

MIT License - feel free to use this project for personal or commercial purposes.

---

Made with ❤️ in Entre Rios, Argentina
