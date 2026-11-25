// Service worker tối thiểu để trình duyệt cho phép cài ứng dụng; không lưu cache.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",()=>{});
