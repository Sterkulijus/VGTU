/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
// import type {PropsWithChildren} from 'react';

import Navigation from './src/navigation';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//  // Header,                  //wealcome to react native piesinukas
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

const App = () => {
  
  return (      
    <SafeAreaView style={styles.root}>
     <Navigation/>
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
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
