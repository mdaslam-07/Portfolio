# Mohamed Aslam — Portfolio

A dark, premium personal portfolio built with React, Vite, Tailwind CSS and Framer Motion.

## Install & run

```bash
npm install
npm run dev
```

Open the printed local URL (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Replacing the profile photo

Open `src/components/Hero.jsx`. Find this block inside the image card:

```jsx
{/* Replace this block with: <img src={yourPhoto} alt="Mohamed Aslam" className="w-full h-full object-cover" /> */}
<div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface via-surface-raised to-ink">
  <span className="font-display text-7xl font-semibold text-paper/10 select-none">MA</span>
</div>
```

1. Drop your photo into `src/assets/` (e.g. `src/assets/profile.jpg`).
2. At the top of `Hero.jsx`, add: `import profilePhoto from "../assets/profile.jpg";`
3. Replace the placeholder `<div>...</div>` with:
   `<img src={profilePhoto} alt="Mohamed Aslam" className="w-full h-full object-cover" />`

## Adding certificate images

Open `src/data/certifications.js`. Each certificate has an `image: null` field.

1. Drop certificate images into `src/assets/certificates/`.
2. Import each one at the top of the file, e.g. `import certNptel from "../assets/certificates/nptel-hci.jpg";`
3. Set `image: certNptel` on the matching entry.
4. In `src/components/Certifications.jsx`, swap the icon placeholder for an `<img>` tag using `cert.image` where you want it shown.

## Adding project images

Open `src/data/projects.js`. Each project has an `image: null` field.

1. Drop screenshots/renders into `src/assets/projects/`.
2. Import each one at the top of the file, e.g. `import palmyrahImg from "../assets/projects/palmyrah-arm.jpg";`
3. Set `image: palmyrahImg` on the matching entry.
4. In `src/components/ProjectCard.jsx`, replace the placeholder `<div>` inside the image container with:
   `<img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />`

## Updating GitHub / LinkedIn / email links

- **GitHub** is already set to `https://github.com/mdaslam-07` in `Navbar.jsx`, `Hero.jsx`, `GithubSection.jsx`, `Contact.jsx` and `Footer.jsx`. If it ever changes, search the project for that URL and replace it everywhere.
- **LinkedIn**: currently a `#` placeholder in `Navbar.jsx` and `Footer.jsx`, and a labeled placeholder in `Contact.jsx` (`const LINKEDIN = "..."`). Replace all three with your real profile URL.
- **Email**: open `src/components/Contact.jsx` and replace `const EMAIL = "your.email@example.com"` with your real address.
- **Resume**: the "Download Resume" button in `Hero.jsx` points to `/resume.pdf`. Add your resume file at `public/resume.pdf` (same filename) and the button will work as-is.

## Adding GitHub repository links to projects

In `src/data/projects.js`, each project has `links: { github: null, demo: null }`. Set `github` to the real repo URL once it exists, e.g. `links: { github: "https://github.com/mdaslam-07/palmyrah-arm", demo: null }` — a "Code" link will then appear automatically on that project's card.

## Project structure

```
src/
  data/
    projects.js         → all project content (edit here, not in components)
    skills.js            → skill groups + "currently learning" list
    certifications.js    → certification entries
    achievements.js       → achievement entries
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    ProjectModal.jsx
    Certifications.jsx
    Achievements.jsx
    GithubSection.jsx
    Contact.jsx
    Footer.jsx
    SectionHeading.jsx   → shared section header
    Icons.jsx             → GitHub/LinkedIn brand icons (kept outside lucide-react)
  assets/
    projects/            → drop project images here
    certificates/         → drop certificate images here
  App.jsx
  main.jsx
  index.css
```
