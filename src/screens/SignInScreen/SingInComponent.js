import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, Text, StatusBar, SafeAreaView } from 'react-native';
import Logo from '../../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Button } from "@react-native-material/core";

const SingInComponent = () => {
    const { username, setUsername } = useState('');
    const { password, setPassword } = useState('');

    const { height } = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        // console.warn("Sign in");
        //validate user

        navigation.navigate('HomeScreen');
    }


    return (

        <SafeAreaView style={styles.main}>
            <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
            <View style={styles.inputContainer}>
                <TextInput
                    label="Student Id"
                />
                <TextInput
                    label="Password"
                />
                <Button title="Sign In" style={styles.button} onPress={onSignInPressed} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        padding: 15,
        display: 'flex',
        backgroundColor: '#ecf0f5',
        height: '100%',
        alignItems: 'center'
    },
    logo: {
        flex: 2,
        width: '70%',
    },
    inputContainer: {
        flex:3,
        alignSelf: 'stretch'
    },
    button:{
        marginTop: 10,
        backgroundColor: '#0b4dc7'
    }
});

export default SingInComponent