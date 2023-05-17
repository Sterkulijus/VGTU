import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  appId: '1:305836683096:android:529325e5bc48a51ba47f2d',
  projectId: 'vgtu-app-9a58d',
  name: 'VGTU-App',
  apiKey: 'AIzaSyC_8U4ay_9PWymZZgUVv1UQUEDgx1r7kD0',
  databaseURL: '',
  messagingSenderId: '',
  storageBucket: '',
};

const firebase = initializeApp(firebaseConfig);
const firestore = getFirestore(firebase);

export default firestore;