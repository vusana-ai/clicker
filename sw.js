self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
  // 네트워크 기본 통과 (PWA 설치 조건 충족용 최소 서비스 워커)
});