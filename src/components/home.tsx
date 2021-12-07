import * as React from 'react';
import { HomeScreen, LoginScreen } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Home() {
  return (
    <Stack.Navigator initialRouteName="Root">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Auth" component={LoginScreen} />
    </Stack.Navigator>
  );
}
