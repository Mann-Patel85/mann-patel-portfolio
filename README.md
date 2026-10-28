# 🌌 Mann Patel — AI & Machine Learning Systems Engineer Portfolio

> High-performance, single-page developer portfolio featuring an interactive **3D Galactic & Neural Constellation** WebGL canvas, mock LLM/Vision inference playground, 3D tilt project showcase, and reactive telemetry HUD.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=for-the-badge&logo=three.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Vercel Ready](https://img.shields.io/badge/Vercel-Deployment%20Ready-000000?style=for-the-badge&logo=vercel)

---

## ⚡ Highlights & Key Features

- **🪐 3D Galactic & Neural Constellation Canvas**: Built with Three.js via `@react-three/fiber` & `@react-three/drei`. Features 1,400+ volumetric stars, procedural nebula glows, and pulsing neural synapses.
- **🔗 Reactive Canvas Integration**: Hovering over skill cards in the UI dynamically highlights and illuminates corresponding 3D neural node clusters in the background space canvas.
- **🧪 Interactive ML Playground**: Simulates real-time token generation, streaming latency telemetry, VRAM consumption, and latency benchmarks across 4 specialized models (LlamaIndex Multi-Agent Swarm, Agentic GraphRAG, YOLOv8 Vision HUD, Music Generation LSTM).
- **🛸 3D Mouse Tilt Project Cards**: Showcase of production AI systems featuring metrics, architecture blueprints, live modal walkthroughs, and direct repository links.
- **🧭 Dynamic Navigation & Telemetry**: Floating glassmorphic dock with active section tracking, magnetic glowing cursor, interactive CV/Resume drawer, and cyberpunk terminal contact form with confetti effects.
- **🚀 Ultra-Fast Static Prerendering**: Pre-compiled with Next.js 16 Turbopack for near-instant page loads and zero SSR hydration lag.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **3D Graphics**: [Three.js](https://threejs.org/) + [@react-three/fiber](https://r3f.docs.pmnd.rs/) + [@react-three/drei](https://github.com/pmndrs/drei)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) + Custom CSS design tokens
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Inline Brand SVGs
- **Particles & FX**: Canvas-Confetti

---

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── favicon.ico             # Browser icon
│   │   ├── globals.css             # Theme tokens, custom scrollbars & selection glows
│   │   ├── layout.tsx              # SEO metadata, OpenGraph tags & Geist font
│   │   └── page.tsx                # Master assembly with dynamic Three.js canvas import
│   ├── components/
│   │   ├── canvas/                 # WebGL Scene, Nebula Glow, Starfield & Neural Constellation
│   │   ├── sections/               # Hero, Skills Matrix, Projects Grid, ML Playground, Timeline, Contact
│   │   └── ui/                     # Navbar dock, Custom cursor, Resume modal, Footer
│   ├── context/
│   │   └── NeuralContext.tsx       # Global state connecting UI hovers to 3D Canvas
│   ├── data/
│   │   └── portfolioData.ts        # Single source of truth for all projects, skills & stats
│   └── lib/
│       └── utils.ts                # Class merging utility (clsx + tailwind-merge)
├── public/                         # Static assets and icons
├── package.json
└── next.config.ts
```

---

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mann-Patel85/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Deploying to Vercel

### Option 1: One-Click Import via Vercel Dashboard (Recommended)

1. Push this repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com/new](https://vercel.com/new).
3. Connect your GitHub account and select your portfolio repository.
4. Vercel will automatically detect **Next.js** framework defaults:
   - **Framework Preset**: `Next.js`
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`
5. Click **Deploy**. Your portfolio will be live on a global CDN in ~1 minute!

---

### Option 2: Deploying via Vercel CLI

1. Install the Vercel CLI globally (if not already installed):
   ```bash
   npm install -g vercel
   ```
2. Log in and deploy directly from the project directory:
   ```bash
   vercel
   ```
3. To deploy directly to production:
   ```bash
   vercel --prod
   ```

---

## 👤 Author

**Mann Patel**
- Portfolio: [https://github.com/Mann-Patel85](https://github.com/Mann-Patel85)
- Email: [mann6657@gmail.com](mailto:mann6657@gmail.com)
- LinkedIn: [linkedin.com/in/mannpatel](https://linkedin.com/in/mannpatel)
