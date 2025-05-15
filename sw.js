self.addEventListener('install', function(event) {
  console.log('[SW] Instalacja');
});

self.addEventListener('activate', function(event) {
  console.log('[SW] Aktywacja');
});

self.addEventListener('fetch', function(event) {
  // Można tu dodać cache'owanie, ale teraz tylko logujemy
  console.log('[SW] Pobieranie:', event.request.url);
});
