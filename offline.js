// All application dependencies are local. Direct file:// use needs no installation.
// HTTPS/localhost hosting additionally enables an offline cache after the first visit.
if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  navigator.serviceWorker.register('./sw.js').catch(() => {
    // Service workers are optional; direct-file usage remains fully offline.
  });
}
