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
let pushSubscription ={"endpoint":"https://fcm.googleapis.com/fcm/send/fTljh3u9z7I:APA91bEWcGZYfY0GPgnesh7gM0mIRcvRn5CoVPw3ogs0WFxdv33PH6onSogEsk90cCwOEifpxULz7rds3YIbsnpGHzIO6OOug0q0AeihIZSEJv0L2uUBVY3tlhK7pA9ZSuVZ0OTzGHTK","expirationTime":null,"keys":{"p256dh":"BOb_DRB6ZA4tTfj9OYG9W2ykymro0RRzQoZXwabFlTRdpgrmIEtQzcsxgD-zPOMbNXwc1l3ktVOFvZzYMdQ7mGY","auth":"OPkeTOR5Brmb58aa9FTC5w"}}
webpush.sendNotification(pushSubscription, 'Your Push Payload Text');

