# �️ GIS & Urban Planning Portfolio

A modern portfolio website showcasing GIS analysis, urban planning projects, and spatial data science work. Built with React, TypeScript, and cutting-edge web technologies, this project presents a clean, professional design with smooth animations and an exceptional user experience.

## ✨ Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Dynamic Portfolio Grid** - Elegant layout with category filtering (GIS, Urban Planning, Data Analysis)
- **Project Showcase** - Detailed presentation of spatial analysis and urban planning projects
- **Dark/Light Mode** - Theme switching with system preference detection
- **Smooth Animations** - Powered by Framer Motion for fluid transitions
- **SEO Optimized** - Built-in meta tags and semantic HTML structure
- **Fast Loading** - Optimized images and lazy loading for performance
- **Contact Form** - Integrated form with validation using React Hook Form
- **Project Detail Pages** - Individual pages for each GIS and urban planning project

## 🚀 Tech Stack

- **Framework:** [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/) - Lightning fast HMR
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) - High-quality React components
- **Animations:** [Framer Motion](https://www.framer.com/motion/) - Production-ready animations
- **Routing:** [React Router v6](https://reactrouter.com/) - Client-side routing
- **Forms:** [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) validation
- **Icons:** [Lucide React](https://lucide.dev/) - Beautiful icon library
- **State Management:** [TanStack Query](https://tanstack.com/query) - Powerful data fetching

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm installed - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Git for version control

### Setup Instructions

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd portifolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173/` (or another port if 5173 is busy).

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Build for development (with source maps)
npm run build:dev

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint
```

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── forms/          # Form components
│   ├── layout/         # Layout components (Header, Footer)
│   ├── portfolio/      # Portfolio-specific components
│   ├── providers/      # Context providers
│   ├── seo/           # SEO components
│   └── ui/            # shadcn/ui components
├── data/              # Static data and content
│   ├── photographer.ts # Photographer information
│   └── projects.ts    # Portfolio projects
├── hooks/             # Custom React hooks
├── lib/               # Utility functions
├── pages/             # Page components
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── ProjectDetail.tsx
└── types/             # TypeScript type definitions
```

## 🎨 Customization

### Update Content

1. **Personal Information:** Edit `src/data/photographer.ts`
2. **Portfolio Projects:** Modify `src/data/projects.ts`
3. **Styling:** Customize colors in `tailwind.config.js` and `src/index.css`
4. **Components:** All UI components are in `src/components/`

### Add New Projects

Edit `src/data/projects.ts` and add new project objects:

```typescript
{
  id: "unique-id",
  title: "Título do Projeto",
  category: "gis-analysis", // ou urban-planning, data-visualization, spatial-analysis, computer-vision
  coverImage: "/path/to/image.jpg",
  images: [...],
  description: "Descrição do projeto",
  tools: "QGIS, Python, ArcGIS", // Ferramentas utilizadas
  // ... outros campos
}
```

### Available Project Categories

- `gis-analysis` - Análise GIS
- `urban-planning` - Planejamento Urbano
- `data-visualization` - Visualização de Dados
- `spatial-analysis` - Análise Espacial
- `computer-vision` - Visão Computacional

## 🌐 Deployment

### Deploy with Lovable

1. Open your [Lovable Project](https://lovable.dev/projects/6fd12b81-631e-49d3-83b3-86e8b3fab3ae)
2. Click on **Share → Publish**
3. Your site will be live with a custom Lovable URL

### Deploy to Other Platforms

This project can be deployed to:
- **Vercel:** `npm run build` → Connect GitHub repo
- **Netlify:** `npm run build` → Deploy `dist` folder
- **GitHub Pages:** Use `gh-pages` package
- **Cloudflare Pages:** Connect repo → Build command: `npm run build`

## 🔧 Configuration

### Custom Domain

To connect a custom domain in Lovable:
1. Navigate to **Project → Settings → Domains**
2. Click **Connect Domain**
3. Follow the DNS configuration steps

[Learn more about custom domains](https://docs.lovable.dev/features/custom-domain#custom-domain)

## 📝 Development Workflow

### Using Lovable

Visit the [Lovable Project](https://lovable.dev/projects/6fd12b81-631e-49d3-83b3-86e8b3fab3ae) and use AI prompts to make changes. All edits are automatically committed to this repo.

### Using Your IDE

1. Clone and work locally
2. Push changes to the repository
3. Changes sync automatically with Lovable

### Using GitHub

- Edit files directly in the GitHub web interface
- Use **GitHub Codespaces** for a full VS Code environment in the browser

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Design inspiration from modern photography portfolios

---

**Note:** The `tailwind-plus/` folder contains Tailwind components and themes for design inspiration. Do not remove unless instructed.

Made with ❤️ using [Lovable](https://lovable.dev)

# ./tailwind-plus folder:

The tailwind-plus folder contains tailwind components and themes to be used as inspiration for the project. DO NOT REMOVE THE FOLDER UNLESS SPECIFICALLY TOLD TO DO SO
