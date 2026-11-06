// Firebase Messaging service worker. Keep this file at site root: /firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
firebase.initializeApp({
 apiKey:"AIzaSyDZcm3-jPx_NtgC0eyMOTHd7tH9XJn8ibA",
 authDomain:"elite-matrimony.firebaseapp.com",
 projectId:"elite-matrimony",
 storageBucket:"elite-matrimony.firebasestorage.app",
 messagingSenderId:"654942927998",
 appId:"1:654942927998:web:d6505e03c7ec367e6d2c2f"
});
const messaging=firebase.messaging();
messaging.onBackgroundMessage(payload=>{
 const n=payload.notification||{};
 self.registration.showNotification(n.title||"Elite Gujarati Matrimony",{
  body:n.body||"તમારા માટે નવો Alert છે.",
  icon:"/favicon.ico",
  data:payload.data||{}
 });
});
self.addEventListener("notificationclick",event=>{
 event.notification.close();
 event.waitUntil(clients.openWindow("/"));
});
