# ✨ Happy Diwali — Interactive 3D Festival Experience 🪔🎆

<div align="center">

[![Three.js](https://img.shields.io/badge/Three.js-r160-black?style=for-the-badge&logo=three.js)](https://threejs.org/)
[![WebGL](https://img.shields.io/badge/WebGL-2.0-990000?style=for-the-badge&logo=webgl)](https://www.khronos.org/webgl/)
[![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=for-the-badge&logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.x-000000?style=for-the-badge&logo=express)](https://expressjs.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)](https://www.docker.com/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)](LICENSE)

An immersive, cinematic, and interactive **3D Diwali celebration** built with **Three.js**, **WebGL**, and **Web Audio API**. Tap to light the auspicious Diya, watch the courtyard illuminate with glowing lamps, witness a vibrant Rangoli sweep, release sky lanterns, and celebrate with custom **Heart-shaped firecrackers** and festive fireworks lighting up the night sky!

[Features](#-key-features) • [Quick Start](#-quick-start) • [Controls](#-interactive-controls) • [Docker](#-docker-setup) • [Deployment](#-cloud-deployment) • [Tech Stack](#-tech-stack)

</div>

---

## 🌟 Key Features

- 🪔 **Interactive Diya Lighting**: Tap to strike a match and kindle the sacred flame on the central earthen lamp.
- 🕯️ **Dynamic Courtyard Illumination**: Watch warm light cascade across traditional Indian architecture and balcony railings as surrounding diyas sequentially catch fire.
- 🌸 **Artistic Rangoli Reveal**: A multi-colored powdered floral rangoli unfolds in real time with synchronized acoustic sweep audio.
- 🏮 **Glowing Sky Lantern Release**: Release a radiant, floating lantern that drifts gracefully up toward the stars.
- 💖 **Custom Heart-Style Fireworks**: Specially designed 3D parametric cardioid firecrackers that burst in vivid rose-pink, crimson, and golden glitter.
- 🎆 **3D "Happy Diwali" Sky Burst**: Festive particle fireworks forming a glowing, celebratory greeting in the sky.
- 🎧 **19-Track Spatial Web Audio**: Rich soundscape including ambient night crickets, traditional festive score, match strike, flame catch, rangoli sweep, lantern riser, and reverberant firework peony bursts.
- 🕊️ **Free 3D Exploration**: Drag to orbit and freely explore the illuminated courtyard, and tap anywhere in the night sky to launch custom fireworks!
- 📦 **100% Self-Contained**: All 3D models (`.glb`), audio clips (`.mp3`), and web fonts (`.woff2`) are bundled locally—no external API dependencies required.

---

## 🎮 Interactive Controls

| Action | Control | Result |
| :--- | :--- | :--- |
| **Light the Diya** | Click / Tap Diya | Strikes the match and starts the celebration |
| **Orbit / Look Around** | Click + Drag (Mouse / Touch) | Rotates camera in 3D space during exploration |
| **Shoot Fireworks** | Click / Tap Night Sky | Launches firecrackers at your cursor/tap location |
| **Replay Experience** | Click **Watch again** | Resets the celebration back to the beginning |

---

## 🚀 Quick Start

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### 1. Clone the repository
```bash
git clone https://github.com/pabitralenka07/Happy_Diwali.git
cd Happy_Diwali
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
npm start
```

Open your browser and navigate to:
```
http://localhost:3000
```

---

## 🐳 Docker Setup

Run the application anywhere inside an isolated Docker container:

### Using Docker Compose (Recommended)
```bash
docker-compose up --build
```

### Using standard Docker
```bash
# Build Docker image
docker build -t happy-diwali-3d .

# Run container on port 3000
docker run -d -p 3000:3000 --name diwali-app happy-diwali-3d
```

---

## ☁️ Cloud Deployment

### Deploy to Vercel
The repository includes a production-ready `vercel.json` configuration:

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy directly from the project directory:
   ```bash
   vercel
   ```

### Deploy to Railway / Render / Fly.io
Deploy this repository with a single click:
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Port**: `3000`

---

## 🛠️ Tech Stack

- **Rendering Engine**: [Three.js](https://threejs.org/) (WebGL 2.0, Custom GLSL Shaders, Bloom Pass, Tone Mapping)
- **Audio Engine**: Web Audio API with 19 spatial audio tracks
- **Server Framework**: [Express.js](https://expressjs.com/) (Node.js runtime with zero-cache HTTP headers)
- **3D Asset Formats**: Khronos glTF 2.0 Binary (`.glb`)
- **Containerization**: Docker & Docker Compose

---

## 📁 Project Structure

```
Happy_Diwali/
├── public/
│   ├── audio/              # 19 spatial audio tracks (.mp3)
│   ├── models/             # 6 optimized 3D glTF models (.glb)
│   │   ├── house.glb       # Traditional Indian courtyard house
│   │   ├── courtyard.glb   # Stone paved courtyard & parapets
│   │   ├── city.glb        # Surrounding festive cityscape
│   │   ├── plants.glb      # Foreground courtyard flora
│   │   └── plants_bg.glb   # Background trees & foliage
│   ├── _next/static/       # Three.js WebGL engine, shaders & fonts
│   ├── brand/              # App icons & favicons
│   ├── og.jpg              # Rich social preview card
│   └── index.html          # Main HTML entry point
├── Dockerfile              # Production multi-stage Docker container
├── docker-compose.yml      # Container orchestration
├── package.json            # Node.js dependencies and scripts
├── server.js               # Express server with optimized static routing
├── vercel.json             # Vercel serverless deployment manifest
└── README.md               # Project documentation
```

---

## 📜 License

This project is licensed under the [ISC License](LICENSE).

---

<div align="center">
  <b>Happy Diwali to you and your loved ones! May your year be filled with light, joy, and prosperity. 🪔✨</b>
</div>
