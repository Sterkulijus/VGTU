import { View, Text, StyleSheet, Image, useWindowDimensions, Dimensions, Linking } from 'react-native'
import React, { useState } from 'react'
import { HStack, Button, Avatar, Dropdown, Pressable, Backdrop, BackdropSubheader, AppBar } from "@react-native-material/core";
import CalIcon from '../../assets/icons/calendar.png';
import MapIcon from '../../assets/icons/map.png';
import ModdleIcon from '../../assets/icons/spreadsheet.png';
import LogOutIcon from '../../assets/icons/logout.png';
import UserIcon from '../../assets/icons/user.png'
import { useNavigation } from '@react-navigation/native';







const BottomBar = () => {
    const windowWidth = Dimensions.get('window').width;
    const { height } = useWindowDimensions();
    const navigation = useNavigation();


    const OpenMoodle = () => {
        Linking.openURL("https://moodle.vilniustech.lt/login/index.php")
    }

    const OpenMap = () => {
        navigation.navigate('MapView');
    }

    const OpenAccount = () => {
        navigation.navigate('AccountView');
    }

    const LogOut = () => {
        //Clear the user info before log out

        navigation.navigate('SignIn');
    }

    const OpenSchedule = () => {
        navigation.navigate('ScheduleView');
    }

    return (
        <View style={[styles.barContainer, { height: "7%" }]}>
            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenSchedule}>
                <Image source={CalIcon} style={[styles.logo,]} resizeMode="contain" />
                <Text style={styles.selectBar}> Schedule </Text>
            </Pressable>

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenMap}>
                <Image source={MapIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> Map </Text>
            </Pressable>

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenMoodle}>
                <Image source={ModdleIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> Moodle </Text>
            </Pressable>

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenAccount}>
                <Image source={UserIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> Account </Text>
            </Pressable>

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={LogOut}>
                <Image source={LogOutIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> Log Out </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    barContainer: {
        flexDirection: 'row',
        backgroundColor: '#dde2e7',
    },
    pressable: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#0b4dc7',
        borderTopEndRadius: 10,
        borderTopLeftRadius: 10,
    },
    selectBar: {
        color: 'white'
    },
    logo: {
        width: '35%',
        height: 28,
    },



    // container: {
    //     width: '100%',
    //     padding: 15,
    //     marginVertical: 5,
    //     alignItems: 'center',
    //     borderRadius: 5,
    // },
    // text: {
    //     fontWeight: 'bold',
    //     color: 'white',
    // },
    // avatarStyle: {
    //     marginRight: 10
    // },
    // logo: {
    //     width: '100%',
    //     height: '100%'
    // },
});

export default BottomBar