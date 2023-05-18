import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingInView from '../screens/SingInView';
import AccountView from '../screens/AccountView'
import SettingsView from '../screens/SettingsView'
import TwoDMapView from '../screens/2DMapView'
import ThreeDMapView from '../screens/3DMapView'
import ScheduleView from '../screens/ScheduleView';
import TodaysSchedule from '../screens/TodaySchedule';
import LectureTimeView from '../screens/LectureTimeView'

import mapKazkas from '../screens/TwoDMapView'

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SingInView} />
            <Stack.Screen name="ScheduleView" component={ScheduleView} />
            <Stack.Screen name="AccountView" component={AccountView} />
            <Stack.Screen name="SettingsView" component={SettingsView} />
            <Stack.Screen name="2DMapView" component={TwoDMapView} />
            <Stack.Screen name="3DMapView" component={ThreeDMapView} />
            <Stack.Screen name="TodaysSchedule" component={TodaysSchedule} />
            <Stack.Screen name="LectureTimeView" component={LectureTimeView} />
            <Stack.Screen name="TwoDMapView" component={mapKazkas} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;