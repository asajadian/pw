self.addEventListener("push", function (event) {
  console.log(event)
   const data = event.data?.json() ?? {};
   console.log(data);
  const promiseChain = self.registration.showNotification("Hello, World.")

  event.waitUntil(promiseChain)
})