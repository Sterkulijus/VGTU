import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, Alert, Linking } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from "@react-native-material/core";
import firebase from '../firebase/database';
import Schedule from '../screens/Schedule';
import { useRoute } from '@react-navigation/native';


const redirectToForgotPassword = () => {
    Linking.openURL("https://mano.vilniustech.lt/registration/remind")
}  



const SingInView = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = async () => {

        handleLogin(username,password)
       //console.log(username);
      // console.log(password);
        
      //  navigation.navigate('ScheduleView', {week: 0});
    }


    const showAlert = () => {
        Alert.alert(
          'Neteisingas Slaptazodis arba studento ID',
          '',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed')
            }
          ]
        );
      };

   function handleLogin(userId, password) {

        firebase.firestore().collection('User Firebase Auth').get().then(z => {
            z.forEach(test => {
                let data = test.data();
                if (data.Email === userId && data.Password === password) {
                  //  const navigation = useNavigation();
                    navigation.navigate({name:'ScheduleView',params: { myGroup: data.GroupId }, merge: true});
                  
                    siunciam(data.GroupId);
                   // siunciam(data.GroupId)
                   // const temp= 1;
                    throw "break";

                    //GroupeID(data.GroupId);
                //    console.log(data);  
            }
            else{ 
                showAlert();
               // console.log("Neteisingas Slaptazodis arba Studento ID");
              }
        })
        });

function siunciam(grupesid){
   // const navigation = useNavigation();
   // console.log(grupesid); 
    navigation.navigate({name:'ScheduleView',params: { myGroup: grupesid }, merge: true});
}


// function GroupeID(Groupe){
//         const submit = () => {
// navigation.navigate({
// name:'ScheduleView',
// params:{grupe: Groupe},
// merge:true,

// });
//         }
//     }


        // db.collection('users').where('userId', '==', userId).get()
        //   .then((querySnapshot) => {
        //     if (!querySnapshot.empty) {
        //       // If the user exists, check if the entered password matches the stored password
        //       const userDoc = querySnapshot.docs[0];
        //       const userData = userDoc.data();
        //       if (userData.password === password) {
        //         // If the passwords match, navigate the user to the app's main screen
        //       } else {
        //         // If the passwords don't match, display an error message
        //       }
        //     } else {
        //       // If the user doesn't exist, display an error message
        //     }
        //   })
        //   .catch((error) => {
        //     // Handle query error
        //   });
      }
      
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode="contain" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' color='#0b4dc7' style={styles.input} onChangeText={email => setUsername(email)}/>
                <TextInput placeholder='Password' color='#0b4dc7' style={styles.input} onChangeText={password=> setPassword(password)} secureTextEntry={true} />
                <Button title="Log In" style={styles.button} onPress={onSignInPressed} />
                <Button title="Forgot Password" style={styles.button1} onPress={redirectToForgotPassword} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#dde2e7',
        flex: 1,
    },
    imageContainer: {
        alignItems: 'center', 
    },
    logo: {
        width: '70%',
    },
    inputContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%'
    },
    input: {
        width: '90%',
    },
    button: {
        width: '90%',
        backgroundColor: '#0b4dc7',
        marginTop: 10,
    },
    button1: {
        width: 190,
        backgroundColor: 'gray',
        marginTop: 10,
    },
});

export default SingInView