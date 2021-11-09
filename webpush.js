const webpush = require('web-push');

// VAPID keys should only be generated only once.\
const vapidKeys = {
  publicKey: 'BHlAadSvAkcQPsjkqMYUkOS75hSteAmjiJOr0b39ZAObhuvf7Hbt9ZWeXatiSgD3dgAIQVhPloXv99YV-2FM42U',
  privateKey: 'q61d70yreg_Ay4m8sySxmsiqFFvQPbpaE7yItGEXMRA'
}

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
let pushSubscription = {"endpoint":"https://fcm.googleapis.com/fcm/send/eelGkb-Wv0U:APA91bH7p8sqVGVd74hlvxplTz_gCXMLN0tiuse5_LxzdCWqWy44SY2ZUy7KXFFEM4SIQ3Ytq8Sv2-DNZGuabv6HBf-lv0hdjdxpQN1yHblguaOxiToB7q_CU3UGKWMTpfqmFoJNxWeB","expirationTime":null,"keys":{"p256dh":"BGn7dBu-nlNMdelyJ6ZmUamQtfX_u8GneR8gfYFq_CV8TYr32qE7Xha0Bc6W7W-vAX9YNVu9c7ece_Xar1mkcl8","auth":"14OXYgdPVKDjgB1k_lWkig"}}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');

