import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import SignInScreen from '../screens/SingInView';


const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
          screenOptions={{
             cardStyle: {
            backgroundColor: '#0e1529'
          },
          headerShown: false
        }}>
        <Stack.Screen name="Sign In" component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
