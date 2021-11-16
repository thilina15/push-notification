const webpush = require('web-push');

// VAPID keys should only be generated only once.\
const vapidKeys = {
  publicKey: 'BHlAadSvAkcQPsjkqMYUkOS75hSteAmjiJOr0b39ZAObhuvf7Hbt9ZWeXatiSgD3dgAIQVhPloXv99YV-2FM42U',
  privateKey: 'q61d70yreg_Ay4m8sySxmsiqFFvQPbpaE7yItGEXMRA'
}


let vapidKeys2 = {
  "publicKey": "BHBGsh8bWs6kOnxm0FdNe0Ibh6bEd6niewiFeyAQdfgvRkLq2FTosy9a1Io9BJrhLqNmkaALAhV45Paz9txzNpI",
  "privateKey": "1RBtRjjFe_pLUk3QHVL3M3dGw3Cysdm2x2cQ-ieDXqc"
}


webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys2.publicKey,
  vapidKeys2.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
let shaakira_sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/fTljh3u9z7I:APA91bEWcGZYfY0GPgnesh7gM0mIRcvRn5CoVPw3ogs0WFxdv33PH6onSogEsk90cCwOEifpxULz7rds3YIbsnpGHzIO6OOug0q0AeihIZSEJv0L2uUBVY3tlhK7pA9ZSuVZ0OTzGHTK","expirationTime":null,"keys":{"p256dh":"BOb_DRB6ZA4tTfj9OYG9W2ykymro0RRzQoZXwabFlTRdpgrmIEtQzcsxgD-zPOMbNXwc1l3ktVOFvZzYMdQ7mGY","auth":"OPkeTOR5Brmb58aa9FTC5w"}}

let akeel_sub ={"endpoint":"https://fcm.googleapis.com/fcm/send/d56qbzPwQWY:APA91bEFNBFkrrWy_QPchbuIdM6jhqyqd0D5f0LN1AfUhOqDPjXzTms8CJ4ZfZrgI58qygzD-FcqvomW4fPOlFi2XYeHjwSI982x4Rq8stEoV66lkEUOvDoE7lch5EhGrC-BQl_wQ40B","expirationTime":null,"keys":{"p256dh":"BFOvcr3JDDPduyL9S4sGI39-WTUAnbcbEbzul9gCe_IJaF4_9l66iqq02ujrbKi2CY2hlFmpPdd8YfzpRxlZLg4","auth":"6iA2y7bH9nNsl4292tAkyA"}}

let me ={"endpoint":"https://fcm.googleapis.com/fcm/send/eRL9dBTRtg8:APA91bH7ZerO_cCYyTYBcOoMAmao2_iqvNjKGEuS-lJBFoz3Bgj-4ueTOJLesa26Wzd6sP35OTWjDUSRbOqz8sfBLA4wG-td-Ni9oS92yOvgf25s2kPoYqM-NfsmQKwkvBDPJ8aHqmjX","expirationTime":null,"keys":{"p256dh":"BCC3ys6pz4vIq30aPgHOSZbJFokEikOFZ2OMpzwOyNDRMGoPpWpKN_Ow0FhNvJbfYnr3c85U8YaZSAKQpGLbdY8","auth":"LTFqf662ALzUrskeNvQDYw"}}

webpush.sendNotification(me, 'Your Push Payload Text');

