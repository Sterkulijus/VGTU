import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SingInView from '../screens/SingInView';
import MapView from '../screens/MapView'
import AccountView from '../screens/AccountView'
import SettingsView from '../screens/SettingsView'
import TwoDMapView from '../screens/2DMapView'
import ThreeDMapView from '../screens/3DMapView'
import LectureTimeView from '../screens/LectureTimeView'
import Schedule from '../screens/Schedule';
import ScheduleSelector from '../screens/ScheduleSelector';
import ScheduleWeek from '../screens/ScheduleWeek';
import ScheduleView from '../screens/ScheduleView';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SingInView} />
            <Stack.Screen name="MapView" component={MapView} />
            <Stack.Screen name="ScheduleView" component={ScheduleSelector} />
            <Stack.Screen name="AccountView" component={AccountView} c/>
            <Stack.Screen name="SettingsView" component={SettingsView} />
            <Stack.Screen name="2DMapView" component={TwoDMapView} />
            <Stack.Screen name="3DMapView" component={ThreeDMapView} />
            <Stack.Screen name="LectureTimeView" component={LectureTimeView} />
            <Stack.Screen name="ScheduleDay" component={Schedule} />
            <Stack.Screen name="ScheduleWeek" component={ScheduleWeek} />
            <Stack.Screen name="ScheduleFirst" component={ScheduleView} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;