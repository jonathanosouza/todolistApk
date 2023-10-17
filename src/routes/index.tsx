import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomePage from '../pages/welcome';
import SignIn from '../pages/signIn';
import Home from '../pages/InitialPage';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomePage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SingIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
