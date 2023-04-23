// import * as firebase from 'firebase';
// import "firebase/database";
// import "firebase/auth";


// const firebaseConfig = {
//     apiKey: 'aaaaaaaaaaaaaaaaaaaaaaaaaaa',
//     databaseURL: 'aaaaaaaaaaaaaaaaaaa',
//     projectId: 'aaaaaaaaaaaaaaa',
//     appId: 'asdddddddddd',
//   };

//   export function init(){
//     firebase.initializeApp(firebaseConfig);
//   }

//   export const saveData = () =>{
//     firebase.database().ref('data/'+6).set({id: 6, lat: '', long: '', taken: 'false', userId: '', startTime: ''});  
//     //firebase.database().ref('data/'+id).set({item: data, id: id});
//   }

//   export const updateData =(id, taken, startTime, userId)=>{
//     firebase.database().ref('data/'+ id).update({taken: taken, startTime: startTime, userId: userId});
//   }

//   export const signUp = (email, password) =>{
//     firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//     console.log('User account created & signed in!');
//   })
//   .catch(error => {
//     if (error.code === 'auth/email-already-in-use') {
//       console.log('That email address is already in use!');
//     }

//     if (error.code === 'auth/invalid-email') {
//       console.log('That email address is invalid!');
//     }

//     console.error(error);
//   });
//   }

//   export const signin = (email, password) => {
//     firebase.auth().signInWithEmailAndPassword(email,password).then((data)=>{
//       return data.user.uid
//     })
//   };

//   export const signOut = () => {
//    firebase.auth().signOut().then(() => console.log('User signed out!'));
//   };
