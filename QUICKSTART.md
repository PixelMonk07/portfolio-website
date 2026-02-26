# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to `http://localhost:5173`

---

## Customization Checklist

### Must Update
- [ ] `src/components/Navbar.jsx` - Lines 40, 48: Update GitHub and LinkedIn URLs
- [ ] `src/sections/Contact.jsx` - Lines 23-37: Update email, GitHub, LinkedIn
- [ ] `src/sections/Hero.jsx` - Line 52-60: Add your developer image

### Optional Updates
- [ ] `src/sections/Projects.jsx` - Add more projects or update existing ones
- [ ] `src/sections/Skills.jsx` - Modify skills and proficiency levels
- [ ] `src/sections/About.jsx` - Update bio and personal information
- [ ] `tailwind.config.js` - Change color scheme

---

## Deploy to Vercel (Fastest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# For production
vercel --prod
```

---

## Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## Troubleshooting

### Port already in use?
```bash
npm run dev -- --port 3000
```

### Node version issues?
Make sure you're using Node.js v18 or higher:
```bash
node --version
```

---

## Need Help?

- Check the full README.md for detailed documentation
- Review the component files - they're well-commented
- Test locally before deploying

---

**Ready to impress?** Make it yours and ship it! 🚀
