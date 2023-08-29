import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../views/auth/Login';
import TellUsMore from '../views/auth/TellUsMore';
import UploadPhoto from '../views/auth/UploadPhoto';
import ParentEmail from '../views/auth/ParentEmail';
import OTPValidate from '../views/auth/OTPValidate';
import EditProfile from '../views/Players/EditProfile';
import WelcomeScreen from '../views/auth/WelcomeScreen';
import AddPhotoId from '../views/auth/AddPhotoId';
import AddPhotoIdCoach from '../views/auth/AddPhotoIdCoach';
import SelectLocation from '../views/auth/SelectLocation';
import EnterDetails from '../views/auth/EnterDetails';
import PlayerStyle from '../views/auth/PlayerStyle';


const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='PlayerStyle' screenOptions={{ headerShown: false, animationEnabled:false }} >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="TellUsMore" component={TellUsMore} />
      <Stack.Screen name="UploadPhoto" component={UploadPhoto} />
      <Stack.Screen name="ParentEmail" component={ParentEmail} />
      <Stack.Screen name="OTPValidate" component={OTPValidate} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="AddPhotoId" component={AddPhotoId} />
      <Stack.Screen name="AddPhotoIdCoach" component={AddPhotoIdCoach} />
      <Stack.Screen name="SelectLocation" component={SelectLocation} />
      <Stack.Screen name="EnterDetails" component={EnterDetails} />
      <Stack.Screen name="PlayerStyle" component={PlayerStyle} />


    </Stack.Navigator>
  );
}
