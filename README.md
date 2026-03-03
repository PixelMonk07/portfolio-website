# Niloy Pal — Portfolio Website

A modern, high-performance portfolio website built with React, Vite, and Tailwind CSS. Designed with a dark, tech-focused aesthetic and smooth motion-driven interactions.

🔗 **Live Website:** [Click Here](https://niloypal.netlify.app/)  
💼 **Role:** Software Engineer | Full-Stack Developer  

---

## 📌 Overview

This portfolio showcases my projects, technical skills, and professional journey as a developer. The website emphasizes:

- Clean UI/UX
- Motion-driven interactions
- Performance optimization
- Responsive design
- Modern frontend architecture

---

## 🚀 Key Features

- Modern dark UI with purple neon accents  
- Fully responsive (desktop → tablet → mobile)  
- Animated hero section with typewriter effect  
- Glassmorphism mobile drawer navigation  
- Smooth scroll navigation  
- Animated skills progress indicators  
- Project showcase with tags and tech stack  
- Contact form powered by EmailJS  
- Optimized WebP images  
- Production-ready build configuration  

---

## 📁 Project Structure
niloy-portfolio/
├── public/                        # Static assets served as-is
├── src/
│   ├── assets/
│   │   └── workspace.webp         # Workspace image used in About/Hero
│   ├── components/
│   │   ├── Navbar.jsx             # Top navigation bar
│   │   ├── Footer.jsx             # Footer section
│   │   └── ThemeToggle.jsx        # Dark/light mode toggle button
│   ├── contexts/
│   │   └── ThemeContext.jsx       # React context for theme state
│   ├── sections/
│   │   ├── Hero.jsx               # Landing / hero section
│   │   ├── About.jsx              # About me section
│   │   ├── Skills.jsx             # Skills & tech stack section
│   │   ├── Projects.jsx           # Projects showcase section
│   │   └── Contact.jsx            # Contact form / info section
│   ├── App.jsx                    # Root component, layout & routing
│   ├── main.jsx                   # React entry point
│   └── index.css                  # Global styles & Tailwind directives
├── .gitignore                     # Files & folders ignored by Git
├── index.html                     # HTML entry point (Vite)
├── package.json                   # Project metadata & dependencies
├── package-lock.json              # Locked dependency versions
├── tailwind.config.js             # Tailwind CSS configuration
├── postcss.config.js              # PostCSS configuration
├── vite.config.js                 # Vite bundler configuration
├── QUICKSTART.md                  # Quick setup guide
└── README.md                      # Project documentation (this file)
---

## 🛠 Tech Stack

### Frontend
- React
- Vite
- Tailwind CSS
- Framer Motion

### Utilities
- Lucide React (icons)
- EmailJS (contact form)

### Deployment
- GitHub
- Netlify (CI/CD enabled)

---

## 🏗 Architecture & Design Decisions

- Component-based folder structure (sections + reusable components)
- Environment variables for API configuration
- Optimized image delivery using WebP
- Lazy loading for performance
- Scroll-based navbar behavior
- Mobile-first responsive approach
- Glass-style drawer navigation for small screens

---

## ⚡ Performance Considerations

- Production build via Vite
- Optimized assets
- Minified JS & CSS
- Lazy-loaded images
- Lightweight dependency usage
- Lighthouse-optimized layout structure

---

## 🌍 Deployment

The site is deployed on Netlify with continuous deployment enabled.  
Any push to the `main` branch triggers automatic production deployment.

---

## 📬 Contact

**GitHub:** https://github.com/PixelMonk07  
**LinkedIn:** https://www.linkedin.com/in/niloypal/

---

Built with ❤️ by Niloy Pal.
