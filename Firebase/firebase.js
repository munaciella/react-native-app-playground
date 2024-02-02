import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDK39k-XUqBjyHV8ifYo0NYI4LPzAfS6R8',
  authDomain: 'rn-app-758e6.firebaseapp.com',
  projectId: 'rn-app-758e6',
  storageBucket: 'rn-app-758e6.appspot.com',
  messagingSenderId: '823564460724',
  appId: '1:823564460724:web:43e6b21643200247ed2de1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase}
