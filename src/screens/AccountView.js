import React, { Component, useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, StatusBar, Alert } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Switch, Stack, Button, Avatar, Pressable } from "@react-native-material/core";
import Header from '../components/Header';
import { border } from '@mui/system';
import BottomBar from '../components/BottomBar'


const AccountView = () => {
    const [checked, setChecked] = useState(false);

    //editable={false} selectTextOnFocus={false} 
    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <View style={styles.accountContainer}>

                    {/* <Avatar label="E B" color='#0b4dc7' size={200} /> */}
                    <Pressable style={styles.pressableStyle}>
                        <Text style={{ fontSize: 100, fontWeight: 'bool', color: 'white' }}>EB</Text>

                    </Pressable>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                        <Text>Dark mode</Text>
                    </View>

                    <View style={{ width: '100%', alignItems: 'center', marginTop: 60 }}>
                        <TextInput color='#0b4dc7' label="kazkas.kazkas@stud.vilniustech.com" editable={false} selectTextOnFocus={false} style={styles.input} />
                        <TextInput color='#0b4dc7' label="kazkas.kazkas@stud.vilniustech.com" editable={false} selectTextOnFocus={false} style={styles.input} />
                        <Text>Nzn cia gal kokios info pridėti</Text>
                    </View>
                </View>

            </View>

            <BottomBar></BottomBar>
        </View>
    );
};

export default AccountView;


const styles = StyleSheet.create({
    main: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#dde2e7',
        flex: 1,

    },
    accountContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 30,
    },
    button: {
        width: '90%',
        backgroundColor: '#0b4dc7',
        marginTop: 10,
    },
    input: {
        width: '90%',
    },
    pressableStyle: {
        backgroundColor: '#0b4dc7',
        height: '34%',
        width: '60%',
        borderRadius: 400,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
