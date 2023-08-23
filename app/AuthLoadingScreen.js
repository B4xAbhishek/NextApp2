import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { AuthStack } from './navigation/AuthStack'
import { AppStack } from './navigation/Appstack'

export default function AuthLoadingScreen({
    userToken = ''
}) {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
                userToken ? <Stack.Screen name="AppStack" component={AppStack} /> : <Stack.Screen name="AuthStack" component={AuthStack} />
            }
        </Stack.Navigator>
    )
}


