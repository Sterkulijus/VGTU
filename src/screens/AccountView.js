import React, { Component, useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, StatusBar, Alert } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Switch, Stack, Button } from "@react-native-material/core";
import Header from '../components/Header';
import { border } from '@mui/system';
import BottomBar from '../components/BottomBar'


const AccountView = () => {
    
    // const [week, DienynasClick] = useState(true);
    var week = 5

   

    return (
        <View style={{ flex: 1, backgroundColor: '#C5D0DA' }}>
        <View style={styles.main}>
  
          <Text>asdasdasd</Text>
  
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
        alignItems: 'center'
    },
    weekStyle: {
        alignSelf: 'center',
    },
    weekContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        width: 150,
    },
    calendarContainer: {
        marginTop: 10,
        width: '100%',
        // marginLeft: 15,
        // marginRight: 15,

    },
    calendarElement: {
        borderWidth: 1,
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15
    }

});
