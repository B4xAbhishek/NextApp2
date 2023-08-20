import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';
import Navigation from '../../lib/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import i18n from 'i18n';
import { CommonStyles, Colors } from '../../constants';
import { setUserdata, setUserLanguage } from '../../actions/auth';
import { connect } from 'react-redux';
import AppStatusBar from '../../components/common/statusBar';
class LoadingView extends Component {
  componentDidMount() {

    AsyncStorage.getItem('User').then((res) => {
      if (res) {
        this.props.setUser(JSON.parse(res));
        Navigation.navigate('AppHome');
      } else {
        Navigation.navigate('AppLogin');
      }
    });
  }
  render() {
    return (
      <View style={[CommonStyles.overlay, CommonStyles.center]}>

        <ActivityIndicator size={22} color={Colors.light} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (res) => {
      dispatch(setUserdata(res));
    },
    setLanguage: (res) => {
      dispatch(setUserLanguage(res))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoadingView);
