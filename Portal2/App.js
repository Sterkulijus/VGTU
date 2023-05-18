import React from 'react';
import { SafeAreaView,  StyleSheet, StatusBar } from 'react-native';
import Navigation from './src/navigation/navigation'

export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: StatusBar.currentHeight
  }
});

