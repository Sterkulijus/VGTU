import { View, Text } from 'react-native'
import React from 'react'
import {
    StyleSheet,
    useColorScheme,
    Pressable,
    Linking,
  } from 'react-native';
  
  import {
    Colors,
    DebugInstructions,
   // Header,                  //wealcome to react native piesinukas
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

const Index = () => {

    
    const isDarkMode = useColorScheme() === 'dark';

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
     return(
     <View style={styles.header}>
     <Text style={styles.sectionTitle}> CIA BUS LOGO </Text>
     </View>
     )
  } 
  const Boxes = () => {
     return(
     <View style={styles.boxContainer}>
             {/* Tvarkarastis */}

     <View style={styles.box}>
     <View style={styles.inner}>
     <Pressable onPress={TvarkarastisClick}
 style={[{height:"100%", width:"100%", alignItems: 'center',
 justifyContent: 'center',}]}
 accessibilityLabel = "what?????">

 <Text style={styles.sectionTitle}> Tvarkarastis </Text> 
 </Pressable>
     </View>
     </View>
    
       {/*  Zemelapis  */}

     <View style={styles.box}>
     <View style={styles.inner}>
     <Pressable onPress={ZemelapisClick}
 style={[{height:"100%", width:"100%", alignItems: 'center',
 justifyContent: 'center',}]}
 accessibilityLabel = "what?????">

 <Text style={styles.sectionTitle}> Zemelapis </Text> 
 </Pressable>   
     </View>
     </View>
    
 {/* Dienynas */}

     <View style={styles.box}>
     <View style={styles.inner}> 
 <Pressable onPress={DienynasClick}
 style={[{height:"100%", width:"100%", alignItems: 'center',
 justifyContent: 'center',}]}
 accessibilityLabel = "what?????">

 <Text style={styles.sectionTitle}> Dienynas </Text> 
 </Pressable>
 </View>
 </View>

 {/* Moodle */}

     <View style={styles.box}>
     <View style={styles.inner}>
     <Pressable onPress={MoodleClick}
 style={[{height:"100%", width:"100%", alignItems: 'center',
 justifyContent: 'center',}]}
 accessibilityLabel = "what?????">

 <Text style={styles.sectionTitle}> Moodle </Text> 
 </Pressable>
     </View>
     </View>


    
     </View>

     )
  } 
  return (
    <View>
     <Header/>
     <Boxes/>
    </View>
  )
}
const styles = StyleSheet.create({
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
      },
      sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: '#FFFF00',
      },
      sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
      },
      highlight: {
        fontWeight: '700',
      },
    header : {
      width: '100%',
      height: '15%',
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    boxContainer : {
      width: '100%',
      height: '85%',
      backgroundColor: 'red',
      padding: 5,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    box :{
      width: '50%',
      height: '50%',
      backgroundColor: 'blue',
      padding: 5,
    },
    inner : {
    flex: 1,
    backgroundColor: "orange",  
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default Index