<div align="center">

# Niloy Pal — Portfolio

**Software Engineer · Full-Stack Developer**

[![Live Site](https://img.shields.io/badge/Live%20Site-niloypal.netlify.app-6C63FF?style=for-the-badge&logo=netlify&logoColor=white)](https://niloypal.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-PixelMonk07-181717?style=for-the-badge&logo=github)](https://github.com/PixelMonk07)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-niloypal-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/niloypal/)

*A modern, high-performance portfolio built with React, Vite, and Tailwind CSS — featuring a dark, tech-focused aesthetic and motion-driven interactions.*

</div>

---

## Overview

This portfolio showcases my projects, technical skills, and professional journey as a developer. It is built with a focus on clean UI/UX, smooth animations, responsive design, and production-grade performance.

---

## Features

| Feature | Description |
|---|---|
| 🎨 Dark UI | Purple neon accent theme with glassmorphism elements |
| 📱 Responsive | Fully adaptive layout from mobile to desktop |
| ✍️ Typewriter Effect | Animated hero section with dynamic text cycling |
| 🗂️ Drawer Navigation | Glass-style slide-in drawer for mobile screens |
| 🔗 Smooth Scrolling | Section-based navigation with scroll-aware navbar |
| 📊 Skill Indicators | Animated progress bars for tech stack visualization |
| 🗃️ Project Showcase | Cards with project descriptions, tags, and tech stack |
| 📬 Contact Form | Functional form powered by EmailJS |
| ⚡ Optimized Assets | WebP images, lazy loading, minified build output |
| 🎓 Education Timeline | Visual timeline showcasing academic background with animated icons |
| 💼 Experience Timeline | Professional journey display with role details and tech stacks |
| 🌗 Theme Toggle | Comprehensive light/dark/system theme support across all components |

---

## Tech Stack

**Frontend**

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-EF0086?style=flat-square&logo=framer&logoColor=white)

**Utilities**

![Lucide](https://img.shields.io/badge/Lucide_React-F56565?style=flat-square)
![EmailJS](https://img.shields.io/badge/EmailJS-EA4335?style=flat-square&logo=gmail&logoColor=white)

**Deployment**

![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github)

---

## Project Structure

```
niloy-portfolio/
├── public/
│   └── resume/
│       └── Niloy_Pal_Resume.pdf    # Resume file for download - V2
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with theme toggle
│   │   ├── Footer.jsx              # Footer with back-to-top
│   │   ├── ThemeToggle.jsx         # Theme switcher (light/dark/system)
│   │   └── ResumeDownload.jsx      # Resume download button
│   ├── sections/
│   │   ├── Hero.jsx                # Hero section with CTA
│   │   ├── About.jsx               # About me section
│   │   ├── Education.jsx           # Education timeline - V2
│   │   ├── Experience.jsx          # Experience timeline - V2
│   │   ├── Skills.jsx              # Skills with progress bars
│   │   ├── Projects.jsx            # Project showcase
│   │   └── Contact.jsx             # Contact form with EmailJS
│   ├── contexts/
│   │   └── ThemeContext.jsx        # Theme management context
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # App entry point
│   └── index.css                   # Global styles + Tailwind
├── tailwind.config.js              # Tailwind configuration
├── vite.config.js                  # Vite configuration
└── package.json                    # Dependencies
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+
- npm

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/PixelMonk07/niloy-portfolio.git
cd niloy-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Production Build

```bash
npm run build
```

Output is generated in the `dist/` directory, optimized and ready for deployment.

---

## Deployment

The site is deployed on **Netlify** with CI/CD enabled.
Every push to the `main` branch triggers an automatic production deployment.

---

## Architecture Notes

- **Component-based structure** — sections and reusable UI components are kept separate for clarity and scalability
- **Environment variables** — API keys (EmailJS) are stored in `.env` and never committed to version control
- **Mobile-first** — styles are written mobile-first and expanded upward using Tailwind breakpoints
- **Scroll-aware navbar** — changes appearance on scroll for better visual hierarchy
- **WebP delivery** — images are pre-converted to WebP for faster load times

---

<div align="center">

Built with ❤️ by **Niloy Pal**

</div>
