import { View, Text, StyleSheet, Image, Dimensions, Linking } from 'react-native'
import React from 'react'
import { Pressable} from "@react-native-material/core";
import CalIcon from '../../assets/icons/calendar.png';
import MapIcon from '../../assets/icons/map.png';
import ModdleIcon from '../../assets/icons/spreadsheet.png';
import SettingsIcon from '../../assets/icons/settings.png';
import UserIcon from '../../assets/icons/user.png'
import { useNavigation } from '@react-navigation/native';

const BottomBar = () => {
    const windowWidth = Dimensions.get('window').width;
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

    const OpenSettings = () => {
        navigation.navigate('SettingsView');
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
});

export default BottomBar