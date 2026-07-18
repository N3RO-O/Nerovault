// Nerovault service worker — caches the app shell so the tracker works fully offline.
// Bump CACHE_VERSION whenever any cached file changes so clients pick up the update.
const CACHE_VERSION = 'nerovault-v3';
const APP_SHELL = [
  './',
  './index.html',
  './manifest.json',
  './assets/tailwind.css',
  './assets/fonts.css',
  './assets/chart.umd.js',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/icon-192-maskable.png',
  './assets/icon-512-maskable.png',
  './assets/apple-touch-icon.png',
  './assets/fonts/inter-latin-400-normal.woff2',
  './assets/fonts/inter-latin-500-normal.woff2',
  './assets/fonts/inter-latin-600-normal.woff2',
  './assets/fonts/inter-latin-700-normal.woff2',
  './assets/fonts/inter-latin-800-normal.woff2',
  './assets/fonts/inter-latin-900-normal.woff2',
  './assets/fonts/jetbrains-mono-latin-400-normal.woff2',
  './assets/fonts/jetbrains-mono-latin-500-normal.woff2',
  './assets/fonts/jetbrains-mono-latin-600-normal.woff2',
  './assets/fonts/jetbrains-mono-latin-700-normal.woff2',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first for the app shell (static, versioned assets); network-first fallback for
// anything else so future additions still work without a service worker update.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).catch(() => caches.match('./index.html'));
    })
  );
});