// import { View, Text, SafeAreaView, StatusBar, useWindowDimensions, Image } from 'react-native'
// import React, { useState } from 'react'
// import { StyleSheet, useColorScheme, Linking, } from 'react-native';
// import { Colors } from 'react-native/Libraries/NewAppScreen';
// import { useNavigation } from '@react-navigation/native';
// import {
//   AppBar, HStack, Button, Avatar, Dropdown, Pressable, Backdrop,
//   BackdropSubheader, Divider, FAB, Switch
// } from "@react-native-material/core";
// import Header from '../components/Header';
// // import BottomNavigation, {
// //   FullTab
// // } from 'react-native-material-bottom-navigation'
// import BottomBar from '../components/BottomBar';


// const HomeView = () => {
//   const { height } = useWindowDimensions();
//   const navigation = useNavigation();

//   const DienynasClick = () => {
//     Linking.openURL("https://mano.vilniustech.lt/login")
//   }
//   const MoodleClick = () => {
//     Linking.openURL("https://moodle.vilniustech.lt/login/index.php")
//   }

//   const ZemelapisClick = () => {
//     Linking.openURL("about:blank")
//   }
//   const TvarkarastisClick = () => {
//     // Linking.openURL("about:blank")
//     navigation.navigate('ScheduleView');
//   }

//   const LogOut = () => {
//     navigation.navigate('SignIn');
//   }


//   const [checked, setChecked] = useState(true);
//   // const [week, DienynasClick] = useState(true);
//   var week = 5;

//   // DienynasClick = () => {
//   //     Alert.alert('Alert Title', 'My Alert Msg', [
//   //         {
//   //             text: 'Cancel',
//   //             onPress: () => console.log('Cancel Pressed'),
//   //             style: 'cancel',
//   //         },
//   //         { text: 'OK', onPress: () => console.log('OK Pressed') },
//   //     ]
//   //     );
//   //     week = 2

//   //     //         setUser({
//   //     // week: 6
//   //     //           });
//   // }

//   //Čia turi buti gaunama info iš fire base apie kalendoriu
//   const calendar = [
//     {
//       lecture: 2,
//       weekDay: 'Monday',
//       hall: 'SRL-24A4',
//       group: 1,
//     },
//     {
//       lecture: 3,
//       weekDay: 'Tuesday',
//       hall: 'SRL-24A4',
//       group: 0,
//     }
//   ]

//   var calendarView = []
  
//   for (let i = 0; i < calendar.length; i++) {



//     calendarView.push(
//       <View key={i} style={styles.calendarElement}>
//         <Text style={[{ fontWeight: '600', marginLeft: 14, fontSize: 16, }]}>{calendar[i].weekDay}</Text>
        
        
//       </View>
//     )
//   }
  
//   const LogOutsss = () => {
//     navigation.navigate('SignIn');
//   }

//   return (
//     // <SafeAreaView style={{ flex: 1, backgroundColor: '#4f4f4f' }}>

//     //   <View style={styles.weekContainer}>
//     //     <Text variant="h6" style={styles.weekStyle}>WEEK {week}</Text>
//     //     {/* <Switch value={checked} onValueChange={() => setChecked(!checked)} /> */}
//     //   </View>

//     //   <View style={styles.calendarContainer}>
//     //     {/* {calendar} */}
//     //   </View>
//     //   <BottomBar></BottomBar>
//     // </SafeAreaView>

//     <View style={{ flex: 1, backgroundColor: '#4f4f4f' }}>
//       <View style={styles.main}>

//         <SafeAreaView  >
//           <Header />
//           <View style={styles.weekContainer}>
//             <Text variant="h6" style={styles.weekStyle}>1</Text>
//             <Switch value={checked} onChange={LogOutsss} onValueChange={() => setChecked(!checked)} />
//             <Text variant="h6" style={styles.weekStyle}>2</Text>
//           </View>

//           <View style={styles.calendarContainer}>
//             {calendarView}
            
//           </View>

//         </SafeAreaView>

//       </View>

//       <BottomBar></BottomBar>
//     </View>
//     // <Backdrop style={styles.main} revealed={revealed} header={
//     //   <AppBar
//     //     transparent
//     //     leading={props => (
//     //       <Pressable
//     //         style={styles.toggleButton}
//     //         onPress={() => setRevealed(prevState => !prevState)}>
//     //         <Text style={styles.menuButtonText}> EB </Text>
//     //       </Pressable>
//     //     )} />
//     // } backLayer={
//     //   <View style={{ height: 90 }}>
//     //     <Pressable
//     //       style={styles.menuButton}>
//     //       <Text style={styles.drawMeniu}> Options </Text>
//     //     </Pressable>

//     //     <Divider color='white' />
//     //     <Pressable onPress={LogOut}
//     //       style={styles.menuButton}>
//     //       <Text style={styles.drawMeniu}> Log out </Text>
//     //     </Pressable>
//     //   </View>
//     // }>


//     //   <BackdropSubheader style={styles.tesss}/>
//     //   <View style={styles.bodyContainer}>
//     //     <View style={styles.boxContainer}>
//     //       {/* Tvarkarastis */}

//     //       <View style={styles.box}>
//     //         <View style={styles.inner}>
//     //           <Pressable onPress={TvarkarastisClick}
//     //             style={styles.presableStyle}>
//     //             <Text style={styles.sectionTitle}> Schedule </Text>
//     //           </Pressable>
//     //         </View>
//     //       </View>

//     //       {/*  Zemelapis  */}

//     //       <View style={styles.box}>
//     //         <View style={styles.inner}>
//     //           <Pressable onPress={ZemelapisClick}
//     //             style={styles.presableStyle}>
//     //             <Text style={styles.sectionTitle}> Map </Text>
//     //           </Pressable>
//     //         </View>
//     //       </View>

//     //       {/* Dienynas */}

//     //       <View style={styles.box}>
//     //         <View style={styles.inner}>
//     //           <Pressable onPress={DienynasClick}
//     //             style={styles.presableStyle}>
//     //             <Text style={styles.sectionTitle}> My Vgtu </Text>
//     //           </Pressable>
//     //         </View>
//     //       </View>

//     //       {/* Moodle */}
//     //       <View style={styles.box}>
//     //         <View style={styles.inner}>
//     //           <Pressable onPress={MoodleClick}
//     //             style={styles.presableStyle}>
//     //             <Text style={styles.sectionTitle}> Moodle </Text>
//     //           </Pressable>
//     //         </View>
//     //       </View>
//     //     </View>
//     //   </View>
//     // </Backdrop>


//   )
// }
// const styles = StyleSheet.create({
//   main: {
//     marginTop: StatusBar.currentHeight,
//     backgroundColor: '#dde2e7',
//     flex: 1,
    
//     height: '100%'
//   },
//   // bottomNavigation: {
//   //   backgroundColor: 'red',
//   //   color: 'red'
//   // },
//   // tesss: {
//   //   backgroundColor: '#dde2e7',
//   //   marginRight: -5,
//   //   marginLeft: -5,
//   //   borderRadius: 100
//   // },
//   // bodyContainer: {
//   //   backgroundColor: '#dde2e7',
//   //   height: '100%'
//   // },

//   // sectionContainer: {
//   //   marginTop: 32,
//   //   paddingHorizontal: 24,
//   // },
//   // sectionTitle: {
//   //   fontSize: 24,
//   //   fontWeight: '600',
//   //   color: 'white',
//   // },
//   // boxContainer: {
//   //   width: '100%',
//   //   height: '85%',
//   //   padding: 5,
//   //   flexDirection: 'row',
//   //   flexWrap: 'wrap',
//   // },
//   // box: {
//   //   width: '50%',
//   //   height: '50%',
//   //   padding: 5,
//   // },
//   // inner: {
//   //   flex: 1,
//   //   backgroundColor: "#ee6c4d",
//   //   alignItems: 'center',
//   //   justifyContent: 'center',
//   //   borderRadius: 25,
//   // },
//   // presableStyle: {
//   //   height: "100%",
//   //   width: "100%",
//   //   alignItems: 'center',
//   //   justifyContent: 'center'
//   // },
//   // avatarStyle: {
//   //   color: 'white'
//   // },
//   // buttonStyle: {
//   //   backgroundColor: 'green',
//   //   borderRadius: 50
//   // },
//   // menuButton: {
//   //   margin: 5,
//   //   //  backgroundColor: 
//   //   //alignSelf: 'center',
//   //   // marginRight: 15,
//   //   // marginLeft: 15,
//   //   // borderWidth: 2,
//   //   with: '100%',
//   //   // borderRadius: 20,
//   //   // marginLeft:10,
//   //   // marginRight: 10,
//   //   // marginBottom: 5
//   // },
//   // menuButtonText: {
//   //   fontSize: 16,
//   //   alignSelf: 'center',
//   //   color: 'white',
//   //   fontWeight: '600',
//   //   color: 'black'
//   // },
//   // drawMeniu: {
//   //   fontSize: 20,
//   //   alignSelf: 'center',
//   //   fontWeight: '600',
//   //   color: 'white'
//   // },
//   // toggleButton: {
//   //   borderWidth: 1,
//   //   borderRadius: 50,
//   //   width: 40,
//   //   height: 40,
//   //   backgroundColor: '#dde2e7',
//   //   display: 'flex',
//   //   justifyContent: 'center',
//   //   alignContent: 'center'
//   // },

//   // weekStyle: {
//   //   alignSelf: 'center',
//   // },
//   weekContainer: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//     borderStyle: 'solid',
//     borderWidth: 1,
//     borderRadius: 25,
//     width: 150,
//     alignSelf: 'center'
//   },
//   // calendarContainer: {
//   //   marginTop: 10,
//   //   width: '100%',
//   //   // marginLeft: 15,
//   //   // marginRight: 15,

//   // },
//   // calendarElement: {
//   //   borderWidth: 1,
//   //   marginBottom: 10,
//   //   marginLeft: 15,
//   //   marginRight: 15
//   // }
// });

// export default HomeView