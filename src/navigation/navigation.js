import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingInView from '../screens/SingInView';
// import HomeView from '../screens/HomeView';
import ScheduleView from '../screens/ScheduleView';
import MapView from '../screens/MapView'
import AccountView from '../screens/AccountView'

const Stack = createNativeStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SingInView} />
            {/* <Stack.Screen name="HomeView" component={HomeView} /> */}
            <Stack.Screen name="ScheduleView" component={ScheduleView} />
            <Stack.Screen name="MapView" component={MapView} />
            <Stack.Screen name="AccountView" component={AccountView} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;