import React, { useEffect } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from 'react-native-splash-screen'


import { AuthStack } from './navigation/AuthStack'
import { AppStack } from './navigation/Appstack'

export default function AuthLoadingScreen({
    userToken = ''
}) {
    const Stack = createStackNavigator()

    useEffect(() => {
        SplashScreen.hide()
    }, [])

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                userToken ? <Stack.Screen name="AppStack" component={AppStack} /> : <Stack.Screen name="AuthStack" component={AuthStack} />
            }
        </Stack.Navigator>
    )
}


