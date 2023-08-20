import React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import Navigation from '../lib/Navigation';
import { HomeStack } from './index';
import { Colors, Layout, CommonStyles } from '../constants';

import { connect } from 'react-redux';
// let home = require('../assets/images/bottom-bar/home.png');
// let photo = require('../assets/images/bottom-bar/photograph.png');
// let category = require('../assets/images/bottom-bar/Iconionic-ios-menu.png');
// let chat = require('../assets/images/bottom-bar/sms.png');
// let user = require('../assets/images/bottom-bar/Iconawesome-user.png');
let wide = Layout.width;
const AppTabBar = (props) => (
  <BottomTabBar
    {...props}
    onTabPress={({ route }) => {
      if (route.key !== 'Category') {
        Navigation.navigate(route.routeName);
      } else {
        props.screenProps.Action();
      }
    }}
  />
);

function CategoryStack() {
  return <View></View>;
}

function renderTabBarIcon(focused, iconSource) {
  return (
    <View style={CommonStyles.tabBarItemContainer}>
      <Image
        source={iconSource}
        resizeMode={'contain'}
        style={[
          {
            height: wide * 0.06,
            width: wide * 0.06,
          },
          focused && { tintColor: Colors.base },
        ]}
      />
    </View>
  );
}

function renderChatIcon(focused, count) {
  return (
    <View key={focused} style={CommonStyles.tabBarItemContainer}>
      <Image
        source={chat}
        resizeMode={'contain'}
        style={[
          {
            height: wide * 0.06,
            width: wide * 0.06,
          },
          focused && { tintColor: Colors.base },
        ]}
      />

    </View>
  );
}


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack
  },
  // {
  //   defaultNavigationOptions: ({ navigation, screenProps }) => ({
  //     //  tabBarIcon: ({ focused }) => {
  //     // const { routeName } = navigation.state;
  //     //   switch (routeName) {
  //     //     case 'Home':
  //     //       // icon = renderTabBarIcon(focused, home);
  //     //       break;

  //     //     default:
  //     //       console.log("re")
  //     //     // icon = renderTabBarIcon(focused, user);
  //     //   }
  //     //   return icon;
  //     // },
  //     // }),
  //     tabBarOptions: {
  //       activeTintColor: Colors.base,
  //       inactiveTintColor: Colors.darkshade,
  //       showLabel: false,
  //     },
  //     tabBarComponent: (props) => <AppTabBar {...props} />,
  //   },
);

export default TabNavigator;
