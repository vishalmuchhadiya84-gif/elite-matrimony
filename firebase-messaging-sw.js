importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDZcm3-jPx_NtgC0eyMOTHd7tH9XJn8ibA",
  authDomain: "elite-matrimony.firebaseapp.com",
  projectId: "elite-matrimony",
  storageBucket: "elite-matrimony.firebasestorage.app",
  messagingSenderId: "654942927998",
  appId: "1:654942927998:web:d6505e03c7ec367e6d2c2f",
  measurementId: "G-WQWR48CLQ1"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Elite Matrimony";
  const options = {
    body: payload.notification?.body || "તમને નવો સંદેશ મળ્યો છે.",
    icon: "/favicon.ico"
  };

  self.registration.showNotification(title, options);
});
