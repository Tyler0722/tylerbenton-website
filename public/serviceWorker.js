// self.addEventListener("install", function(e) {
//   e.waitUntil(
//     caches.open("airhorner").then(function(cache) {
//       console.log("Cached");
//       return cache.addAll([
//         "http://localhost:3000/",
//         "http://localhost:3000/_next/static/development/pages/home.js?ts=1571077057833",
//         "http://localhost:3000/_next/static/development/pages/_app.js?ts=1571077057833",
//         "http://localhost:3000/_next/static/runtime/webpack.js?ts=1571077057833",
//         "http://localhost:3000/_next/static/runtime/main.js?ts=1571077057833",
//         "http://localhost:3000/css/style.css",
//         "http://localhost:3000/images/tyler.webp",
//         "http://localhost:3000/_next/static/development/dll/dll_492c97d20afdca23aa1f.js?ts=1571077057833",
//         "http://localhost:3000/fonts/Ubuntu/bold.ttf",
//         "http://localhost:3000/fonts/Ubuntu/medium.ttf",
//         "http://localhost:3000/fonts/Ubuntu/regular.ttf",
//         "http://localhost:3000/_next/static/chunks/0.js",
//         "http://localhost:3000/_next/webpack-hmr?page=/home",
//         "http://localhost:3000/manifest.json",
//         "http://localhost:3000/",
//         "http://localhost:3000/_next/static/development/pages/home.js?ts=1571077058750",
//         "http://localhost:3000/_next/static/development/pages/_app.js?ts=1571077058750",
//         "http://localhost:3000/_next/static/runtime/webpack.js?ts=1571077058750",
//         "http://localhost:3000/_next/static/runtime/main.js?ts=1571077058750",
//         "http://localhost:3000/css/style.css",
//         "http://localhost:3000/images/tyler.webp",
//         "http://localhost:3000/_next/static/development/dll/dll_492c97d20afdca23aa1f.js?ts=1571077058750",
//         "http://localhost:3000/fonts/Ubuntu/bold.ttf",
//         "http://localhost:3000/fonts/Ubuntu/medium.ttf",
//         "http://localhost:3000/fonts/Ubuntu/regular.ttf",
//         "http://localhost:3000/",
//         "http://localhost:3000/images/tyler.webp",
//         "http://localhost:3000/manifest.json",
//         "http://localhost:3000/css/style.css"
//       ]);
//     })
//   );
// });

// self.addEventListener("fetch", function(event) {
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       return response || fetch(event.request);
//     })
//   );
// });
