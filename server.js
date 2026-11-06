/**
 * Local Helper Server for "For Her" Romantic Web App
 * ----------------------------------------------------
 * Runs a local web server to:
 * 1. View the website at http://localhost:3000
 * 2. Allow 1-click automatic saving of your love letters directly
 *    into love_letters.js on your computer!
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const DEFAULT_PORT = 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff'
};

const server = http.createServer((req, res) => {
  // Enable CORS so requests from any local origin work
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Endpoint: Check server status
  if (req.url === '/api/status' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', serverRunning: true }));
    return;
  }

  // API Endpoint: Save letters directly to love_letters.js
  if (req.url === '/api/save-letters' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk.toString(); });
    req.on('end', () => {
      try {
        const letters = JSON.parse(body);
        if (!Array.isArray(letters)) {
          throw new Error('Payload must be an array of letters.');
        }

        const fileContent = `/**
 * ========================================================
 * 💌 SWEET LOVE LETTERS & PROMISES DATA
 * ========================================================
 * This file contains all your romantic pictures & love letters!
 * Last updated: ${new Date().toLocaleString()}
 * ========================================================
 */

window.LOVE_LETTERS_DATA = ${JSON.stringify(letters, null, 2)};
`;

        fs.writeFileSync(path.join(ROOT, 'love_letters.js'), fileContent, 'utf8');
        console.log(`[${new Date().toLocaleTimeString()}] Successfully saved ${letters.length} love letters to love_letters.js!`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, count: letters.length }));
      } catch (err) {
        console.error('Error saving letters:', err);
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: err.message }));
      }
    });
    return;
  }

  // Static file serving
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

  const safePath = path.normalize(decodeURIComponent(reqPath)).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(ROOT, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Prevent caching for dynamic data and HTML so updates show immediately on refresh
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`\n======================================================`);
    console.log(`💖 For Her — Romantic Website & Love Letter Editor 💖`);
    console.log(`======================================================`);
    console.log(`Website & Editor running at: http://localhost:${port}`);
    console.log(`Edit your love letters directly in your browser and click`);
    console.log(`"Save All Letters to Site" to automatically update love_letters.js!`);
    console.log(`Press Ctrl+C to stop the server.\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} is in use, trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
