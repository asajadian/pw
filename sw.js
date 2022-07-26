self.addEventListener("push", function (event) {
  const data = event.data?.json() ?? {}
  console.log(data)
  const promiseChain = self.registration.showNotification(data.title || "لتس‌گو‌یونی", data.options)

  event.waitUntil(promiseChain)
})

self.addEventListener('notificationclick', function(event) {
  console.log(event);
  const url = event.notification.data && event.notification.data.url;
  if(url){
    clients.openWindow(url);
  }
}
, false);