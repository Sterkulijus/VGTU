import React, { Component, useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, SafeAreaView, StatusBar, Alert } from 'react-native';
import Logo from '../../assets/images/VT_pilnas_BlueTransparent.png';
import { useNavigation } from '@react-navigation/native';
import { TextInput, Text, Switch, Stack, Button } from "@react-native-material/core";
import Header from '../components/Header';
import { border } from '@mui/system';


const ScheduleView = () => {
    const [checked, setChecked] = useState(true);
    // const [week, DienynasClick] = useState(true);
    var week =5

    const DienynasClick = () => {
        Alert.alert('Alert Title', 'My Alert Msg', [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        week = 2

//         setUser({
// week: 6
//           });
    }

    var calendar = []
    for (let i = 0; i < 2; i++) {
        calendar.push(
            <View key={i} style={styles.calendarElement}>
                <Text style={[{ fontWeight: '600', marginLeft: 14, fontSize: 16, }]}>WeekDay</Text>
                <Button onPress={DienynasClick}/>
            </View>
        )
    }

    return (
        <SafeAreaView style={styles.main} >
            <Header />
            <View style={styles.weekContainer}>
                <Text variant="h6" style={styles.weekStyle}>WEEK {week}</Text>
                <Switch value={checked} onPress={DienynasClick} onValueChange={() => setChecked(!checked)} />
            </View>

            <View style={styles.calendarContainer}>
                {calendar}
            </View>

        </SafeAreaView>
    );
};

export default ScheduleView;


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
