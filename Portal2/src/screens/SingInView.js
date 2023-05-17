import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, Alert, Linking, TouchableOpacity, Text } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from "@react-native-material/core";
import firestore from '../firebase/database';
import { collection, getDocs } from "firebase/firestore";

const redirectToForgotPassword = () => {
    Linking.openURL("https://mano.vilniustech.lt/registration/remind")
}

const SingInView = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        handleLogin(username, password)
    }

    function gotoMainPage(groupId) {
        navigation.navigate('TodaysSchedule');
    }

    const showAlert = () => {
        Alert.alert('Wrong student id or password');
    };

    function handleLogin(userId, password) {
        const collectionRef = collection(firestore, 'User Firebase Auth');
        getDocs(collectionRef)
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let data = doc.data();

                    if (data.Email === '20212132' && data.Password === 'Admin') {
                        gotoMainPage(data['GroupId']);
                        // throw "break";
                    }
                    else {
                        showAlert();
                        // throw "break";
                    }
                });
            })
    }

    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.2 }]} resizeMode="contain" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Email' color='#0b4dc7' style={styles.input} onChangeText={email => setUsername(email)} />
                <TextInput placeholder='Password' color='#0b4dc7' style={styles.input} onChangeText={password => setPassword(password)} secureTextEntry={true} />
                <Button title="Log In" style={styles.button} onPress={onSignInPressed} />
                <TouchableOpacity onPress={redirectToForgotPassword}>
                    <Text style={styles.linkText}>Forgot Password</Text>
                </TouchableOpacity>
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
    linkText: {
        color: 'blue',
        textDecorationLine: 'underline',
        marginTop: 15
    },
});

export default SingInView