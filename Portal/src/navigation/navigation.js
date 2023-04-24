import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingInView from '../screens/SingInView';
import ScheduleView from '../screens/ScheduleView';
import MapView from '../screens/MapView'
import AccountView from '../screens/AccountView'
import SettingsView from '../screens/SettingsView'
import TwoDMapView from '../screens/2DMapView'
import ThreeDMapView from '../screens/3DMapView'
import LectureTimeView from '../screens/LectureTimeView'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SingInView} />
            <Stack.Screen name="ScheduleView" component={ScheduleView} />
            <Stack.Screen name="MapView" component={MapView} />
            <Stack.Screen name="AccountView" component={AccountView} />
            <Stack.Screen name="SettingsView" component={SettingsView} />
            <Stack.Screen name="2DMapView" component={TwoDMapView} />
            <Stack.Screen name="3DMapView" component={ThreeDMapView} />
            <Stack.Screen name="LectureTimeView" component={LectureTimeView} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;