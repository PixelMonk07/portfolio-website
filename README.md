# Niloy Pal - Portfolio Website

A modern, dark-themed portfolio website built with React, Tailwind CSS, and Framer Motion. Features smooth animations, responsive design, and a bold aesthetic.

## 🎨 Features

- **Modern Dark Theme**: Purple/pink gradient accents with a sleek black background
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**:
  - Hero with dynamic introduction
  - About section with info cards
  - Skills with tabbed categories and animated progress bars
  - Featured projects showcase
  - Contact form with social links
- **Production Ready**: Clean code, optimized performance

## 🚀 Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📁 Project Structure

```
niloy-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🛠️ Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Clone or download the project**

2. **Navigate to the project directory**
   ```bash
   cd niloy-portfolio
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - The site will be running at `http://localhost:5173`

## 🎨 Customization

### Update Personal Information

1. **Contact Links** - Edit the following files:
   - `src/components/Navbar.jsx` - Update GitHub and LinkedIn URLs
   - `src/sections/Contact.jsx` - Update email, GitHub, and LinkedIn

2. **Projects** - Edit `src/sections/Projects.jsx`:
   - Add/remove projects
   - Update project details, tags, and links

3. **Skills** - Edit `src/sections/Skills.jsx`:
   - Modify skill categories
   - Update proficiency levels
   - Add/remove technologies

4. **About Section** - Edit `src/sections/About.jsx`:
   - Update bio and headline
   - Modify info cards (location, focus, status)

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: {
    // Your custom colors
  },
  accent: {
    pink: '#your-color',
    purple: '#your-color',
    yellow: '#your-color',
  }
}
```

### Add Your Image

Replace the placeholder in `src/sections/Hero.jsx`:

```jsx
<div className="aspect-[4/3] bg-gradient-to-br from-purple-900/40 to-pink-900/40">
  {/* Replace this div with: */}
  <img src="your-image.jpg" alt="Developer workspace" className="w-full h-full object-cover" />
</div>
```

## 📦 Build for Production

```bash
npm run build
```

The build files will be in the `dist/` folder.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy: Yes
   - Which scope: Your account
   - Link to existing project: No
   - Project name: niloy-portfolio
   - Directory: ./
   - Override settings: No

5. **Deploy to production**
   ```bash
   vercel --prod
   ```

### Alternative: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/niloy-portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/niloy-portfolio/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🎯 Performance Tips

- Images should be optimized (use WebP format)
- Consider lazy loading for images
- Use production build for deployment
- Enable Gzip compression on your hosting

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Support

If you have any questions or need help with customization, feel free to reach out!

## 🌟 Features to Add (Optional)

- [ ] Blog section
- [ ] Dark/Light mode toggle functionality
- [ ] Loading animation
- [ ] More projects
- [ ] Testimonials section
- [ ] Resume download
- [ ] Analytics integration
- [ ] SEO optimization

---

Built with ❤️ by Niloy Pal
