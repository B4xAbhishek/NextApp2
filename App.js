import React, {Component} from 'react'
import { NavigationContainer } from '@react-navigation/native';

import AuthLoadingScreen from "./app/AuthLoadingScreen";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pushData: [],
      loggedIn: false
    }
  }

  render() {
    return (
      <NavigationContainer>
        <AuthLoadingScreen />
      </NavigationContainer>
    );
  }
}

