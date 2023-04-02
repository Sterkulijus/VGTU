import { View, Text, StatusBar, Image } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Pressable, Divider } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';
import RightArrowIcon from '../../assets/icons/right-arrow.png'
import LogOutIcon from '../../assets/icons/logoutBlack.png'
import VilniusTechImage from '../../assets/images/VT_Logo.png'
import ChangeThisLogo from '../../assets/icons/question-mark.png'

const SettingsView = () => {

    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>Antanas Smetona</Text>
                </View>

                <Pressable style={[styles.pressable]}>
                    <Image source={VilniusTechImage} style={styles.frontLogo} resizeMode="contain" />
                    <Text style={styles.pressableText}> My Vilnius Tech </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo, {   width: '16%'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Image source={ChangeThisLogo} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Image source={ChangeThisLogo} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Image source={ChangeThisLogo} style={[{ marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={RightArrowIcon} style={[styles.logo, {flex: 1, alignItems: 'flex-end'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable, { justifyContent: 'flex-start' }]}>
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
        marginTop: StatusBar.currentHeight,
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
        alignSelf: 'center'
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
    },
    frontLogo: {
        width: '7%',
        height: '100%',
        marginLeft: '4%'
    }
});

export default SettingsView