import * as React from 'react';
import { HomeScreen, LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export function Home() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root" headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Auth" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}
