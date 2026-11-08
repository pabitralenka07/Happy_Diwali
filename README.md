# Diwali 3D Celebration Web App

A self-contained, interactive 3D WebGL Diwali celebration built with Three.js and Express.

## 🚀 Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Run the application
```bash
npm start
# or
npm run dev
```

Visit the celebration: [http://localhost:3000/](http://localhost:3000/)

---

## 🐳 Docker

Run using Docker Compose:
```bash
docker-compose up --build
```
Or build and run directly with Docker:
```bash
docker build -t diwali-celebration .
docker run -p 3000:3000 diwali-celebration
```

---

## ☁️ Deployment

### Deploying to Vercel
This repository includes a pre-configured `vercel.json`:
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this folder and follow the prompts.

### Deploying to Railway / Render / Fly.io
Deploy directly via GitHub repository:
- Build command: `npm install`
- Start command: `npm start`
- Port: `3000`

---

## ✨ Features

- **Interactive 3D WebGL World (Three.js)**:
  - 3D models: Indian courtyard house, surrounding city skyline, courtyard floor, vegetation, background foliage, and sky dome.
  - Interactive diya lighting: tap to strike match and ignite the central diya flame.
  - Flame propagation: sequential warm lighting of diyas along the parapets and railings.
  - Rangoli reveal: swept particle animation with synchronized audio sweep.
  - Sky lantern release: glowing warm lantern rising gracefully into the night sky.
  - Custom **Heart-Style Firecrackers**: special cardioid parametric bursting fireworks in rose-pink and crimson.
  - 3D Golden festive wish: centered "Happy Diwali" sky celebration.
  - Free exploration mode: drag to look around the 3D courtyard; tap the sky to shoot fireworks at will!
- **Rich Spatial Audio Experience**:
  - 19 synchronized Web Audio tracks: ambient night sounds, musical score (`m-intro`, `m-spread`, `m-rangoli`, `m-fireworks`, `m-wish`), match strike, flame catch, rangoli sweep, lantern release, and firework peony explosions.
- **100% Self-Contained**:
  - All 6 3D models (`.glb`), 19 audio files (`.mp3`), 9 web fonts (`.woff2`), and social share images (`og.jpg`) are hosted locally in `public/`.
