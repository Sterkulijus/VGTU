import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, Alert } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from "@react-native-material/core";
import firebase from '../firebase/database';

const SingInView = () => {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = async () => {
        firebase.firestore().collection('Schedule').get().then(z => {
            z.forEach(test => {
                let data = test.data();
                console.log(data);
            })
        });
        console.log(username);
        console.log(password);
        
        navigation.navigate('ScheduleView', {week: 0});
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
});

export default SingInView