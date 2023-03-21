import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions} from 'react-native';
import Logo from '../../../assets/images/VT_pilnas_BlueTransparent.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
    const {username, setUsername} = useState('');
    const {password, setPassword} = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        // console.warn("Sign in");
        //validate user
        
        navigation.navigate('HomeScreen');
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

            <CustomButton text="Sign in" onPress={onSignInPressed}/>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F9FBFC'
    },
    logo: {
        width: '70%',
        maxWidth: 500,
        height: 200,
    },
});

export default SignInScreen