import firebase from '@react-native-firebase/app';
import '@react-native-firebase/firestore';
//import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  appId: '1:305836683096:android:529325e5bc48a51ba47f2d',
  projectId: 'vgtu-app-9a58d',
  name: 'VGTU-App',
  apiKey: 'AIzaSyC_8U4ay_9PWymZZgUVv1UQUEDgx1r7kD0',
  databaseURL: '',
  messagingSenderId: '',
  storageBucket: '',
};

console.log(firebase.apps.length)
if (firebase.apps.length == 0) {
  firebase.initializeApp(firebaseConfig);
  //add firebase.db by dominykas
  //firebase.db = getFirestore(app);
}

export default firebase;