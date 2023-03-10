/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
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

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
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

    <View style={styles.box}>
    <View style={styles.inner}>   
    <Text style={styles.sectionTitle}> Tvarkarastis </Text> 
    </View>
    </View>
    
    <View style={styles.box}>
    <View style={styles.inner}>   
    <Text style={styles.sectionTitle}> Zemelapis </Text> 
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
    <SafeAreaView>
   
     <Header/>
     <Boxes/>
        </SafeAreaView>
  );
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
}
  // REACT NATIVE PAVYZDYS!!!!
  /* {<ScrollView
    contentInsetAdjustmentBehavior="automatic"
    style={backgroundStyle}>
    <Header />  
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <Section title="Tvarkarastis
      ">
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this
        screen and then come back to see your edits.
      </Section>
      <Section title="ZEMELAPIS">
        <ReloadInstructions />
      </Section>
      <Section title="DIENYNAS">
        <DebugInstructions />
      </Section>
      <Section title="Learn More">
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  </ScrollView>} */
});

export default App;
