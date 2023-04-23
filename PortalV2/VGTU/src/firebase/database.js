import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';

const firebaseConfig = {
  appId: '1:44369873039:android:20f825aacb0eb9c42d08fa',
  projectId: 'vgtu-app',
  name: 'VGTU-App',
  apiKey: 'AIzaSyBHYu1KyTJnBDh_KRwbHoQsj7_CLKo6FkI',
  databaseURL: '',
  messagingSenderId: '',
  storageBucket: '',
};

console.log(firebase.apps.length)
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;