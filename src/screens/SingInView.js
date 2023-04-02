import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from "@react-native-material/core";

const SingInView = () => {
    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        // console.warn("Sign in");
        //validate user

        navigation.navigate('ScheduleView');
    }


    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.imageContainer}>
                <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            </View>
            <View style={styles.inputContainer}>
                <TextInput color='#0b4dc7' label="Student Id" style={styles.input} />
                <TextInput color='#0b4dc7' label="Password" style={styles.input} />
                <Button title="Sign In" style={styles.button} onPress={onSignInPressed} />
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