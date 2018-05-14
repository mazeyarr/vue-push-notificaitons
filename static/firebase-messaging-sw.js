importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.13.0/firebase-messaging.js');

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCaMcthRk4wWkr1DlsEHCpUOFIXOVk81KQ",
  authDomain: "vue-admin-6ac2a.firebaseapp.com",
  databaseURL: "https://vue-admin-6ac2a.firebaseio.com",
  projectId: "vue-admin-6ac2a",
  storageBucket: "vue-admin-6ac2a.appspot.com",
  messagingSenderId: "249875113753"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  var notificationTitle = payload.data.title;
  var notificationOptions = {
    body: payload.body,
    icon: '/firebase-logo.png',
    click_action: 'http://localhost:8080/'
  };

  return self.registration.showNotification(notificationTitle,
    notificationOptions);
});

