import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/auth/Login';
import TellUsMore from '../views/auth/TellUsMore';
import UploadPhoto from '../views/auth/UploadPhoto';
import ParentEmail from '../views/auth/ParentEmail';
import OTPValidate from '../views/auth/OTPValidate';
import EditProfile from '../views/Players/EditProfile';
import WelcomeScreen from '../views/auth/WelcomeScreen';


const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TellUsMore" component={TellUsMore} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="ParentEmail" component={ParentEmail} />
      <Stack.Screen name="OTPValidate" component={OTPValidate} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}