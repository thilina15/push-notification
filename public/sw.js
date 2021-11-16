console.log("service worker is running");
self.addEventListener("push", function (e) {
  var options = {
    body: "push notification hellooooooo",
    icon: "images/example.png",
    vibrate: [100, 50, 100],
    data: {
      dataOfArrival: Date.now(),
      primaryKey: "2",
    },
    actions: [
      {
        action: "explore",
        title: "explore new world",
        icon: "images/checkmark.png",
      },
      { action: "close", title: "Close", icon: "images/xmark.png" },
    ],
  };
  e.waitUntil(
    self.registration.showNotification("hello shaakira yooooooo!", options)
  );
});
