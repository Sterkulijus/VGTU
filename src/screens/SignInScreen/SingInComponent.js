import React, { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, Text } from 'react-native';
import Logo from '../../../assets/images/VT_pilnas_BlueTransparent.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { TextInput, IconButton, Button } from "@react-native-material/core";
// import Icon from "@expo/vector-icons/MaterialCommunityIcons";

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

        <View style={styles.rootContainer}>
            <View style={styles.imputContainer}>
                <TextInput
                    label="aaaaaaaaaaaaaaa"
                    // leading={props => <Icon name="account" {...props} />}
                />
                <TextInput
                    label="ddddddddddddd"
                    // leading={props => <Icon name="account" {...props} />}
                />
            </View>
            {/* <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode="contain" />
            <CustomInput placeholder="Username" value={username} setValue={setUsername}/>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>

            <Button title="Sign In" onPress={onSignInPressed} /> */}
            {/* //<CustomButton text="Sign in" onPress={onSignInPressed}/> */}


        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        display: 'flex',
        backgroundColor: '#ecf0f5',
        top: '0'

        // alignItems: 'center',
        // padding: 20,
        // backgroundColor: 'green'
    },
    imputContainer: {
        //display: 'flex',
        flexDirection: 'column',

    },
    logo: {
        width: '70%',
        maxWidth: 500,
        height: 200,
    },
});

export default SingInComponent