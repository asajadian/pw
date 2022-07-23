self.addEventListener("push", function (event) {
  const data = event.data?.json() ?? {}
  console.log(data)
  const promiseChain = self.registration.showNotification(data.title || "لتس‌گو‌یونی", data.options)

  event.waitUntil(promiseChain)
})
