import { View, Text, SafeAreaView, StatusBar, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet, useColorScheme, Linking, } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useNavigation } from '@react-navigation/native';
import {
  AppBar, HStack, Button, Avatar, Dropdown, Pressable, Backdrop,
  BackdropSubheader, Divider, FAB,Switch
} from "@react-native-material/core";
import Header from '../components/Header';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'


const HomeView = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [revealed, setRevealed] = useState(false);

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
    // Linking.openURL("about:blank")
    navigation.navigate('ScheduleView');
  }

  const LogOut = () => {
    navigation.navigate('SignIn');
  }



  // const Header = () => {
  //   return (
  //     <AppBar color='#0b4dc7'
  //       title="Logo maybe here"
  //       // leading={props => (
  //       //   <Image source={Logo} style={styles.logo} resizeMode="contain" />
  //       // )}
  //       trailing={props => (
  //         <HStack>

  //           <Avatar style={styles.avatarStyle} color='grey' label="Eividas Balciunas" size={35} />

  //         </HStack>
  //       )}
  //     />

  //   )
  // }
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

  tabs = [
    {
      key: 'games',
      icon: '',
      label: 'Schedule',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'movies-tv',
      icon: '',
      label: 'Map',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'music',
      icon: 'music-note',
      label: 'Modle',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'meniu',
      icon: 'music-note',
      label: 'Meniu',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }
  ]

  state = {
    activeTab: 'games'
  }

  renderIcon = icon => ({ isActive }) => (
    <Text>A</Text>
    // <Icon size={24} color="white" name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  const [checked, setChecked] = useState(true);
  // const [week, DienynasClick] = useState(true);
  var week = 5;

  // DienynasClick = () => {
  //     Alert.alert('Alert Title', 'My Alert Msg', [
  //         {
  //             text: 'Cancel',
  //             onPress: () => console.log('Cancel Pressed'),
  //             style: 'cancel',
  //         },
  //         { text: 'OK', onPress: () => console.log('OK Pressed') },
  //     ]
  //     );
  //     week = 2

  //     //         setUser({
  //     // week: 6
  //     //           });
  // }

  var calendar = []
  for (let i = 0; i < 2; i++) {
      calendar.push(
          <View key={i} style={styles.calendarElement}>
              <Text style={[{ fontWeight: '600', marginLeft: 14, fontSize: 16, }]}>WeekDay</Text>
              <Button onPress={DienynasClick} />
          </View>
      )
  }

  return (
    <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.main} >
            <Header />
            <View style={styles.weekContainer}>
                <Text variant="h6" style={styles.weekStyle}>WEEK {week}</Text>
                <Switch value={checked}  onValueChange={() => setChecked(!checked)} />
            </View>

            <View style={styles.calendarContainer}>
                {calendar}
            </View>

        </SafeAreaView>
          
        </View>
        <BottomNavigation
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </View>
    // <Backdrop style={styles.main} revealed={revealed} header={
    //   <AppBar
    //     transparent
    //     leading={props => (
    //       <Pressable
    //         style={styles.toggleButton}
    //         onPress={() => setRevealed(prevState => !prevState)}>
    //         <Text style={styles.menuButtonText}> EB </Text>
    //       </Pressable>
    //     )} />
    // } backLayer={
    //   <View style={{ height: 90 }}>
    //     <Pressable
    //       style={styles.menuButton}>
    //       <Text style={styles.drawMeniu}> Options </Text>
    //     </Pressable>

    //     <Divider color='white' />
    //     <Pressable onPress={LogOut}
    //       style={styles.menuButton}>
    //       <Text style={styles.drawMeniu}> Log out </Text>
    //     </Pressable>
    //   </View>
    // }>


    //   <BackdropSubheader style={styles.tesss}/>
    //   <View style={styles.bodyContainer}>
    //     <View style={styles.boxContainer}>
    //       {/* Tvarkarastis */}

    //       <View style={styles.box}>
    //         <View style={styles.inner}>
    //           <Pressable onPress={TvarkarastisClick}
    //             style={styles.presableStyle}>
    //             <Text style={styles.sectionTitle}> Schedule </Text>
    //           </Pressable>
    //         </View>
    //       </View>

    //       {/*  Zemelapis  */}

    //       <View style={styles.box}>
    //         <View style={styles.inner}>
    //           <Pressable onPress={ZemelapisClick}
    //             style={styles.presableStyle}>
    //             <Text style={styles.sectionTitle}> Map </Text>
    //           </Pressable>
    //         </View>
    //       </View>

    //       {/* Dienynas */}

    //       <View style={styles.box}>
    //         <View style={styles.inner}>
    //           <Pressable onPress={DienynasClick}
    //             style={styles.presableStyle}>
    //             <Text style={styles.sectionTitle}> My Vgtu </Text>
    //           </Pressable>
    //         </View>
    //       </View>

    //       {/* Moodle */}
    //       <View style={styles.box}>
    //         <View style={styles.inner}>
    //           <Pressable onPress={MoodleClick}
    //             style={styles.presableStyle}>
    //             <Text style={styles.sectionTitle}> Moodle </Text>
    //           </Pressable>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </Backdrop>
  )
}
const styles = StyleSheet.create({
  main: {
    marginTop: StatusBar.currentHeight,
    backgroundColor: '#0b4dc7'
  },
  kazkas: {
    borderRadius: 50
  },
  tesss: {
    backgroundColor: '#dde2e7',
    marginRight: -5,
    marginLeft: -5,
    borderRadius: 100
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
    height: "100%",
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarStyle: {
    color: 'white'
  },
  buttonStyle: {
    backgroundColor: 'green',
    borderRadius: 50
  },
  menuButton: {
    margin: 5,
    //  backgroundColor: 
    //alignSelf: 'center',
    // marginRight: 15,
    // marginLeft: 15,
    // borderWidth: 2,
    with: '100%',
    // borderRadius: 20,
    // marginLeft:10,
    // marginRight: 10,
    // marginBottom: 5
  },
  menuButtonText: {
    fontSize: 16,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '600',
    color: 'black'
  },
  drawMeniu: {
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
    color: 'white'
  },
  toggleButton: {
    borderWidth: 1,
    borderRadius: 50,
    width: 40,
    height: 40,
    backgroundColor: '#dde2e7',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
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

export default HomeView