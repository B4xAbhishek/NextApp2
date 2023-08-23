import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../views/home/home';


const Stack = createStackNavigator();


export function AppStack() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="DashBoard" component={HomeTabs} />
            <Tab.Screen name="Calendar" component={HomeTabs} />
            <Tab.Screen name="MyTeam" component={HomeTabs} />
            <Tab.Screen name="Inbox" component={HomeTabs} />
            <Tab.Screen name="Account" component={HomeTabs} />
        </Tab.Navigator>
    );
}

function HomeTabs() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} headerMode='screen'>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}



