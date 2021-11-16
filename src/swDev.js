export default function swDev() {

    if (!('serviceWorker' in navigator)) {
        // Service Worker isn't supported on this browser, disable or hide UI.
        return;
      }
      
      if (!('PushManager' in window)) {
        // Push isn't supported on this browser, disable or hide UI.
        return;
      }

    let swURL = process.env.PUBLIC_URL + "/sw.js";
    navigator.serviceWorker.register(swURL).then((res) => {
      console.log(res);
    });
  }
  