
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyDzcM3jP-NtGC0eyMOTHd7H9XJn8iBA",
  authDomain: "elite-matrimony.firebaseapp.com",
  projectId: "elite-matrimony",
  storageBucket: "elite-matrimony.firebasestorage.app",
  messagingSenderId: "654942927998",
  appId: "1:654942927998:web:d6505e03c7ec367ed62c2f",
  measurementId: "G-WQWR48CLQ1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  const title = payload.notification?.title || "Elite Matrimony";

  const options = {
    body: payload.notification?.body || "તમને નવી સૂચના મળી છે.",
    icon: "/favicon.png"
  };

  self.registration.showNotification(title, options);
});
