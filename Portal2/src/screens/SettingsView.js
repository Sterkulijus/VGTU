import { View, Text, Image, Linking } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Pressable, Divider } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';
import RightArrowIcon from '../../assets/icons/right-arrow.png'

import LogOutIcon from '../../assets/icons/logoutBlack.png'
import VilniusTechImage from '../../assets/images/VT_Logo.png'
import ClockIcon from '../../assets/icons/clock.png'
import AccountIcon from '../../assets/icons/user2.png'
import { useNavigation } from '@react-navigation/native';

const SettingsView = () => {
    const navigation = useNavigation();

    const logOut = () => {
        navigation.navigate('SignIn');
    }

    const openLectureTimeWindow = () => {
        navigation.navigate('LectureTimeView');
    }

    const openAccountView = () => {
        navigation.navigate('AccountView');
    }

    const redirectToVTech = () => {
        Linking.openURL("https://mano.vilniustech.lt")
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>Antanas Smetona</Text>
                </View>

                <Pressable style={[styles.pressable]} onPress={redirectToVTech}>
                    <Image source={VilniusTechImage} style={styles.frontLogo} resizeMode="contain" />
                    <Text style={styles.pressableText}> My Vilnius Tech </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo, { width: '16%' }]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]} onPress={openLectureTimeWindow}>
                    <Image source={ClockIcon} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={styles.pressableText}> Lecture time </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo, { width: '14%' }]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]} onPress={openAccountView}>
                    <Image source={AccountIcon} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={styles.pressableText}> Account </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo, { width: '13%' }]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable, { justifyContent: 'flex-start' }]} onPress={logOut}>
                    <Image source={LogOutIcon} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={[styles.pressableText, { marginLeft: '0%' }]}> Log out </Text>
                </Pressable>
            </View>
            <BottomBar></BottomBar>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#dde2e7',
        flex: 1,
    },
    topBar: {
        height: '6%',
        paddingLeft: 5,
        justifyContent: 'center'
    },
    topBarText: {
        fontWeight: '700',
        fontSize: 20,
        alignSelf: 'center',
        color: 'black'
    },
    logo: {
        width: '18%',
        height: '100%',
        marginRight: '2%'
    },
    pressable: {
        flexDirection: 'row',
        height: '8%',
        alignItems: 'center',
    },
    pressableText: {
        fontWeight: '700',
        fontSize: 20,
        marginLeft: '2%',
        color: 'black'
    },
    frontLogo: {
        width: '7%',
        height: '100%',
        marginLeft: '4%'
    }
});

export default SettingsView