# Gradify CSS

A modern CSS gradient generator tool built with React and TypeScript. Create beautiful linear, radial, and conic gradients with an intuitive interface.

## Features

- **Multiple Gradient Types**: Linear, Radial, and Conic gradients
- **Real-time Preview**: See your gradient changes instantly
- **Color Stop Editor**: Add, remove, and customize color stops with position control
- **Angle Control**: Visual angle selector for linear and conic gradients
- **Radial Controls**: Shape (circle/ellipse) and position controls for radial gradients
- **Copy to Clipboard**: One-click copy of generated CSS
- **History**: Automatically saves your created gradients (persisted in localStorage)
- **Preset Gradients**: 15+ beautiful preset gradients in 4 categories (Sunset, Ocean, Nature, Neon)
- **Dark/Light Theme**: Toggle between dark and light modes
- **Internationalization**: Available in English and Spanish
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- [React 19](https://react.dev/) - UI Framework
- [TypeScript](https://www.typescriptlang.org/) - Type Safety
- [Vite 7](https://vite.dev/) - Build Tool
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Zustand](https://zustand.docs.pmnd.rs/) - State Management
- [Zod](https://zod.dev/) - Schema Validation
- [react-i18next](https://react.i18next.com/) - Internationalization
- [Lucide React](https://lucide.dev/) - Icons
- [Biome](https://biomejs.dev/) - Linting & Formatting
- [Vitest](https://vitest.dev/) - Testing

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

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm lint         # Run Biome linter
pnpm format       # Format code with Biome
pnpm test         # Run tests
```

## Usage

1. **Select Gradient Type**: Choose between Linear, Radial, or Conic gradient
2. **Adjust Angle/Position**: Use the visual controls to set the gradient direction
3. **Edit Color Stops**: Add colors, adjust positions, and customize your gradient
4. **Copy CSS**: Click the copy button to get the CSS code
5. **Browse Presets**: Check the Inspiration tab for beautiful preset gradients
6. **View History**: Access your previously created gradients in the History tab

## Author

**qazuor** - [qazuor.com](https://qazuor.com)

- GitHub: [@qazuor](https://github.com/qazuor)
- LinkedIn: [qazuor](https://linkedin.com/in/qazuor)

## License

MIT License - feel free to use this project for personal or commercial purposes.
