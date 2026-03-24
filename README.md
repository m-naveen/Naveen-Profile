# Naveen Kumar Maloth — Portfolio Website

A modern, dark-themed personal portfolio built with React.

## 🚀 Quick Start

```bash
# 1. Unzip the folder
unzip naveen-portfolio.zip
cd naveen-portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
naveen-portfolio/
├── public/
│   ├── index.html
│   └── photo.jpg          ← ADD YOUR PHOTO HERE
├── src/
│   ├── components/
│   │   ├── Navbar.js / .css
│   │   ├── Hero.js / .css
│   │   ├── About.js / .css
│   │   ├── Skills.js / .css
│   │   ├── Experience.js / .css
│   │   ├── Projects.js / .css
│   │   ├── Achievements.js / .css
│   │   ├── Contact.js / .css
│   │   └── Footer.js / .css
│   ├── data/
│   │   └── profile.js     ← ALL YOUR INFO IS HERE
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

---

## ✏️ How to Customize

### 1. Add Your Photo
Copy your photo to `public/photo.jpg` (the WhatsApp profile photo works great).

### 2. Update Your Info
Edit `src/data/profile.js` — all your personal details, experience, projects, and skills live here.

### 3. Change Colors
Edit the CSS variables in `src/App.css` under `:root {}`:
- `--accent` → main green color
- `--accent2` → blue accent
- `--accent3` → amber accent
- `--bg` → background

### 4. Add/Remove Sections
Each section is its own component in `src/components/`. Simply add or remove imports in `src/App.js`.

---

## 🏗️ Build for Production

```bash
npm run build
```

This creates a `build/` folder you can deploy to:
- **Netlify** — drag and drop the `build/` folder
- **Vercel** — `vercel --prod`
- **GitHub Pages** — use `gh-pages` package

---

## 🎨 Tech Stack

- React 18
- CSS3 (custom properties, animations)
- Google Fonts: Syne + JetBrains Mono + Instrument Serif
- No external UI library — 100% custom

---

Made with ❤️ for Naveen Kumar Maloth
