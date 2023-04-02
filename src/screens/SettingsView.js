import { View, Text, StatusBar, ScrollView, Image, Dimensions } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native';
import { Pressable, Switch, Divider } from "@react-native-material/core";
import BottomBar from '../components/BottomBar';
import RightArrowIcon from '../../assets/icons/right-arrow.png'
import LogOutIcon from '../../assets/icons/logoutBlack.png'
import VilniusTechImage from '../../assets/images/VT_Logo.png'

const SettingsView = () => {
    //Čia turi buti gaunama info iš fire base apie kalendoriu

    const windowWidth = Dimensions.get('window').width;


    return (
        <View style={{ flex: 1, backgroundColor: '#DFE5EB' }}>
            <View style={styles.main}>
                <View style={styles.topBar}>
                    <Text style={styles.topBarText}>Vardas Pavardenis</Text>
                </View>



                <Pressable style={[styles.pressable]}>
                    <Image source={VilniusTechImage} style={styles.frontLogo} resizeMode="contain" />
                    <Text style={styles.pressableText}> My Vilnius Tech </Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={RightArrowIcon} style={[styles.logo, {width: '18%', marginRight: '2%'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={RightArrowIcon} style={[styles.logo, {width: '18%', marginRight: '2%'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={RightArrowIcon} style={[styles.logo, {width: '18%', marginRight: '2%'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable]}>
                    <Text style={styles.pressableText}> Kažką čia gal gero </Text>
                    <View style={{flex: 1, alignItems: 'flex-end'}}>
                        <Image source={RightArrowIcon} style={[styles.logo, {width: '18%', marginRight: '2%'}]} resizeMode="contain" />
                    </View>
                </Pressable>
                <Divider />
                <Pressable style={[styles.pressable, { justifyContent: 'flex-start' }]}>
                    <Image source={LogOutIcon} style={[styles.logo, { marginLeft: '2%', width: '10%' }]} resizeMode="contain" />
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
        backgroundColor: '#D3D4D5',
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
        width: '6%',
        height: '100%',
        marginRight: '3%'
    },
    pressable: {
        flexDirection: 'row',
        height: '8%',
        // justifyContent: 'space-between',
        alignItems: 'center'
    },
    pressableText: {
        fontWeight: '700',
        fontSize: 20,
        marginLeft: '2%',

    },
    frontLogo: {
        width: '6%',
        height: '100%',
        marginLeft: '2%'
    }
});

export default SettingsView