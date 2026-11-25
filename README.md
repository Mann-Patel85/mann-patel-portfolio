# Mann Patel — AI/ML Engineer Portfolio

Personal portfolio: agentic GraphRAG, hierarchical RAG, multi-agent LLM pipelines and computer-vision projects.

**Live:** https://mann-patel-portfolio-dun.vercel.app

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion and a react-three-fiber background.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run lint
```

## Editing content

All content lives in [`src/data/portfolioData.ts`](src/data/portfolioData.ts): profile, skills, projects, experience, education, certifications. The resume modal is generated from the same data, so the site and resume can't drift apart.

### Adding project screenshots / videos

1. Put files in `public/projects/<slug>/`, e.g. `public/projects/graphscout/cover.png`.
2. Add them to the project's `media` array:

   ```ts
   media: [
     { type: "image", src: "/projects/graphscout/cover.png", alt: "GraphScout investigation studio" },
     { type: "video", src: "/projects/graphscout/demo.mp4", alt: "Multi-hop query walkthrough", poster: "/projects/graphscout/cover.png" },
   ],
   ```

   The first item is the card cover; the rest appear in the project page gallery. Use 16:9 images (1600×900 works well) and keep videos short, muted MP4s under ~10 MB.

### Adding benchmark results

Set `results` on a project (see the commented example on GraphScout). It renders as a table on the project page and adds a badge to the card. Only add numbers you've measured.

### Resume PDF

Put the file at `public/Mann_Patel_Resume.pdf` and set `personal.resumeUrl` to `"/Mann_Patel_Resume.pdf"`. Until then, the resume modal's "Print / Save as PDF" prints a clean, light version of the resume.

## Structure

```
src/
  app/
    page.tsx                  # Home (single page)
    projects/[slug]/page.tsx  # Static case-study page per project
    opengraph-image.tsx       # Generated 1200×630 PNG link preview
    sitemap.ts, robots.ts
  components/
    sections/                 # Hero, About, Projects, Skills, Experience, Contact
    ui/                       # Navbar, ResumeModal, ProjectMedia, Footer, cursor
    canvas/                   # Three.js background
  context/NeuralContext.tsx   # Skill hover → background highlight
  data/portfolioData.ts       # All content
```
