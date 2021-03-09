/**
 * Includes a Service worker script.
 *
 * A PWA (Progressive Web App) has three requirements:
 * - HTTPS connection.
 * - A site manifest file.
 * - A Service worker.
 *
 * Here we fulfill the last requirement to qualify as a PWA.
 *
 * A pwa-service-worker.js file must exist at site root with *at least* the
 * following code:
 * ```
 * self.addEventListener('fetch', function(event) {});
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps
 * @see https://medium.com/dev-channel/how-to-add-a-web-app-manifest-and-mobile-proof-your-site-450e6e485638
 * @see assets/img/favicon/site.webmanifest
 */

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/pwa-service-worker.js');
}
