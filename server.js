const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Read HTML template into memory fresh on request or reload
function getPageHtml() {
  return fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf-8');
}

// Middleware to prevent all browser caching
app.use((req, res, next) => {
  if (req.url.includes("%3F")) {
    req.url = req.url.split("%3F")[0];
  }
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  res.setHeader("Surrogate-Control", "no-store");
  next();
});

// Custom static files middleware with proper MIME types
app.use(express.static(path.join(__dirname, 'public'), {
  index: false,
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.glb')) {
      res.setHeader('Content-Type', 'model/gltf-binary');
    } else if (filePath.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
    } else if (filePath.endsWith('.mp3')) {
      res.setHeader('Content-Type', 'audio/mpeg');
    } else if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Fallback static mounts
app.use('/_next/static', express.static(path.join(__dirname, 'public/_next/static')));
app.use('/models', express.static(path.join(__dirname, 'public/models'), {
  setHeaders: (res) => res.setHeader('Content-Type', 'model/gltf-binary')
}));
app.use('/audio', express.static(path.join(__dirname, 'public/audio'), {
  setHeaders: (res) => res.setHeader('Content-Type', 'audio/mpeg')
}));
app.use('/brand', express.static(path.join(__dirname, 'public/brand')));

// Root route: / -> Serves the Diwali celebration directly
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.send(getPageHtml());
});

// Dynamic gift wish page: /w/:id -> Redirect to root
app.get('/w/:id', (req, res) => {
  res.redirect(302, '/');
});

// Redirect any /send requests back to main celebration
app.get('/send', (req, res) => {
  res.redirect('/');
});

// Start server
app.listen(PORT, () => {
  console.log(`✨ Diwali celebration running at http://localhost:${PORT}`);
  console.log(`👉 Main URL: http://localhost:${PORT}/`);
});
