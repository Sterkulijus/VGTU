import { View, Text, SafeAreaView, StatusBar, useWindowDimensions, Image } from 'react-native'
import React from 'react'
import {
  StyleSheet,
  useColorScheme,
  Linking,
} from 'react-native';
import Logo from '../../../assets/images/VT_pilnas_BlueTransparent.png';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import { AppBar, HStack, Button, Avatar, Dropdown, Pressable } from "@react-native-material/core";
import { height } from '@mui/system';

const HomeComponent = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { height } = useWindowDimensions();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const DienynasClick = () => {
    Linking.openURL("https://mano.vilniustech.lt/login")
  }
  const MoodleClick = () => {
    Linking.openURL("https://moodle.vilniustech.lt/login/index.php")
  }

  const ZemelapisClick = () => {
    Linking.openURL("about:blank")
  }
  const TvarkarastisClick = () => {
    Linking.openURL("about:blank")
  }

  const Header = () => {
    return (
      <AppBar color='#0b4dc7'
        title="Logo maybe here"
        // leading={props => (
        //   <Image source={Logo} style={styles.logo} resizeMode="contain" />
        // )}
        trailing={props => (
          <HStack>

            <Avatar style={styles.avatarStyle} color='grey' label="Eividas Balciunas" size={35} />

          </HStack>
        )}
      />

    )
  }
  const Body = () => {
    return (
      <View style={styles.bodyContainer}>
        <View style={styles.boxContainer}>
          {/* Tvarkarastis */}

          <View style={styles.box}>
            <View style={styles.inner}>
              <Pressable onPress={TvarkarastisClick}
                style={styles.presableStyle}>
                <Text style={styles.sectionTitle}> Schedule </Text>
              </Pressable>
            </View>
          </View>

          {/*  Zemelapis  */}

          <View style={styles.box}>
            <View style={styles.inner}>
              <Pressable onPress={ZemelapisClick}
         style={styles.presableStyle}>
                <Text style={styles.sectionTitle}> Map </Text>
              </Pressable>
            </View>
          </View>

          {/* Dienynas */}

          <View style={styles.box}>
            <View style={styles.inner}>
              <Pressable onPress={DienynasClick}
             style={styles.presableStyle}>
                <Text style={styles.sectionTitle}> My Vgtu </Text>
              </Pressable>
            </View>
          </View>

          {/* Moodle */}
          <View style={styles.box}>
            <View style={styles.inner}>
              <Pressable onPress={MoodleClick}
                    style={styles.presableStyle}>
                <Text style={styles.sectionTitle}> Moodle </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.main} >
      <Header />
      <Body />
    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  main: {
    marginTop: StatusBar.currentHeight

  },
  bodyContainer: {
    backgroundColor: '#dde2e7',
    height: '100%'
  },

  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  boxContainer: {
    width: '100%',
    height: '85%',
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  inner: {
    flex: 1,
    backgroundColor: "#ee6c4d",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  presableStyle: {
    height:"100%", 
    width:"100%",
    alignItems: 'center', 
    justifyContent: 'center'
  },
  avatarStyle: {
    color: 'white'
  }
});

export default HomeComponent