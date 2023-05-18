import { View, Text, StyleSheet, Image, Dimensions, Linking } from 'react-native'
import React from 'react'
import { Pressable} from "@react-native-material/core";
import CalIcon from '../../assets/icons/calendar.png';
import MapIcon from '../../assets/icons/map.png';
import ModdleIcon from '../../assets/icons/spreadsheet.png';
import VgtuIcon from '../../assets/icons/internet.png';
import SettingsIcon from '../../assets/icons/settings.png';
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
    const windowWidth = Dimensions.get('window').width;
    const navigation = useNavigation();

    const OpenMoodle = () => {
        Linking.openURL("https://moodle.vilniustech.lt/login/index.php")
    }

    const OpenMap = () => {
        navigation.navigate('2DMapView');
    }

    const OpenVgtu = () => {
        Linking.openURL("https://sso.vilniustech.lt/module.php/core/loginuserpass.php?AuthState=_eac26eaddb94f35334da31e8ebff7465c8eeb2d845%3Ahttps%3A%2F%2Fsso.vilniustech.lt%2Fsaml2%2Fidp%2FSSOService.php%3Fspentityid%3Dhttps%253A%252F%252Fmano.vilniustech.lt%252F%26RelayState%3Dhttps%253A%252F%252Fmano.vilniustech.lt%252F%26cookieTime%3D1683283286");
    }

    const OpenSettings = () => {
        navigation.navigate('SettingsView');
    }

    const OpenSchedule = () => {
        navigation.navigate('TodaysSchedule');
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

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenVgtu}>
                <Image source={VgtuIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> V Tech </Text>
            </Pressable>

            <Pressable style={[styles.pressable, { width: windowWidth * 0.20 }]} onPress={OpenSettings}>
                <Image source={SettingsIcon} style={styles.logo} resizeMode="contain" />
                <Text style={styles.selectBar}> Settings </Text>
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
        paddingTop: 4,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: '#0b4dc7',
    },
    selectBar: {
        color: 'white'
    },
    logo: {
        width: '35%',
        height: 28,
    },
});

export default BottomBar