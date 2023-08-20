import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image, key, KeyboardAvoidingView, FlatList } from 'react-native';
import {
  Layout,
  Colors,
  Fonts,
} from '../../constants';

import Navigation from '../../lib/Navigation';

import AppLoader from '../../utils/Apploader';

import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { showErrorAlert } from '../../utils/info';
import isValidEmail from '../../utils/isValidEmail';

import { characterLimit, selectedUserType, UserModel } from '../../constants/constant';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AnimatedInput from "../../Helpers/react-native-animated-input";
import { isNotch } from '../../utils/deviceInfo';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

let wide = Layout.width;
class Home extends Component {
  static navigationOptions = { header: null };
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }
  componentDidMount() {
  }
  _renderPhotos = (item) => {
    return (
      <TouchableOpacity style={{
        width: wide * 0.33, height: wide * 0.33,
        justifyContent: 'center', alignItems: 'center',
      }}
      // onPress={() => Navigation.navigate('CategoryList', { selectedCat: item.item, selectedInd: item.index, isFrom: 'brand' })}
      >
        <View style={{
          // borderWidth: 1,
          margin: 5,
          flex: 1,
          // borderColor: Colors.lightGray,
          justifyContent: 'center', alignItems: 'center',
          //  backgroundColor: Colors.btnBg,

          shadowColor: Colors.lightGray,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1.0, width: '90%',
        }}>

          {
            <Image
              source={require("../../Images/avatar.png")}
              //resizeMode="stretch"
              style={{ width: '100%', height: '100%' }}
            ></Image>
          }

        </View>
        <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 12 }}>23k Likes</Text>
      </TouchableOpacity>
    );
  };
  _renderHighlights = (item) => {
    return (
      <TouchableOpacity style={{
        width: wide * 0.25, height: wide * 0.25,
        justifyContent: 'center', alignItems: 'center',
      }}
      // onPress={() => Navigation.navigate('CategoryList', { selectedCat: item.item, selectedInd: item.index, isFrom: 'brand' })}
      >
        <View style={{
          // borderWidth: 1,
          margin: 5,
          flex: 1,
          // borderColor: Colors.lightGray,
          justifyContent: 'center', alignItems: 'center',
          backgroundColor: Colors.btnBg,
          borderRadius: (wide * 0.22) / 2,
          shadowColor: Colors.lightGray,
          shadowOffset: { width: 0, height: 0 },
          shadowOpacity: 1.0, width: '80%', height: '80%'
        }}>

          {
            <Image
              source={require("../../Images/avatar.png")}
              // resizeMode="contain"
              style={{ width: '100%', height: '100%', borderRadius: (wide * 0.22) / 2, }}
            ></Image>
          }

        </View>
        <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 12 }}>Defence</Text>
      </TouchableOpacity>
    );
  };
  render() {


    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>

        <KeyboardAvoidingView keyboardVerticalOffset={45} style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : null}>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            minHeight: isNotch ? Layout.height - 170 : Layout.height - 100,
            paddingBottom: isNotch ? 30 : 40
          }}>

            <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 15 }} >
              <TouchableOpacity onPress={() => { Navigation.navigate('Chat') }} style={{
                position: 'absolute', right: 0, top: wide * 0.1
              }}>
                <Image style={{

                  width: 30, height: 30
                }} source={require('../../Images/chat_icon.png')} />
              </TouchableOpacity>

              <View style={{ flexDirection: 'row', marginTop: wide * 0.08, alignItems: 'center' }}>
                <View>
                  <Text style={{

                    color: Colors.light, fontSize: 32,
                    fontFamily: Fonts.Regular, lineHeight: 40
                  }}>
                    Vaibhav

            </Text>
                  <Text style={{
                    color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold
                  }}>
                    Chibbar
            </Text>
                </View>
                <Image style={{
                  marginLeft: wide * 0.07,
                  width: 50, height: 50
                }} resizeMode={'contain'} source={require('../../Images/Los_Angeles_Lakers_logo.png')} />
              </View>
              <View style={{ alignSelf: 'center', zIndex: 1 }}>
                <Image style={{
                  width: wide * 0.3, height: wide * 0.45,
                  marginTop: 24, borderRadius: wide * 0.03, borderWidth: 4, borderColor: Colors.borderColor
                }} source={require('../../Images/avatar.png')} />
                <TouchableOpacity style={{
                  width: wide * 0.3, height: wide * 0.2,
                  bottom: 0, position: 'absolute', alignItems: 'center'
                }}>
                  <Image style={{
                    width: '96%', height: '96%',
                  }} resizeMode={'stretch'} source={require('../../Images/edit_profile_gradiant.png')} />
                  <Text
                    style={{ position: 'absolute', bottom: 10, color: Colors.light, fontFamily: Fonts.Bold }} >
                    {"#31 | C"}
                  </Text>
                </TouchableOpacity>

              </View>

              <View style={{ marginTop: -wide * 0.11 }}>
                <Image style={{
                  position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%'
                }} resizeMode={'stretch'} source={require('../../Images/Rectangle.png')} />
                <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: wide * 0.15, alignItems: 'center' }}>
                  <View style={{
                    width: wide * 0.25, justifyContent: 'center', alignItems: 'center',
                    borderRightWidth: 0.3, borderRightColor: 'rgba(255,255,255,0.3)',
                  }}>
                    <Text style={{
                      color: Colors.fontColorGray,
                      fontFamily: Fonts.Bold, fontSize: 20, lineHeight: 30
                    }}>PPG</Text>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 28 }}>11.1</Text>
                  </View>
                  <View style={{
                    width: wide * 0.25, justifyContent: 'center', alignItems: 'center',
                    borderRightWidth: 0.3, borderRightColor: 'rgba(255,255,255,0.3)',
                  }}>
                    <Text style={{
                      color: Colors.fontColorGray,
                      fontFamily: Fonts.Bold, fontSize: 20, lineHeight: 30
                    }}>APG</Text>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 28 }}>9.6</Text>
                  </View>
                  <View style={{
                    width: wide * 0.25, justifyContent: 'center', alignItems: 'center',

                  }}>
                    <Text style={{
                      color: Colors.fontColorGray, fontFamily: Fonts.Bold,
                      fontSize: 20, lineHeight: 30
                    }}>RPG</Text>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 28 }}>1.6</Text>
                  </View>
                </View>
                <Text style={{
                  color: Colors.fontColorGray,
                  fontFamily: Fonts.BoldItalic, fontSize: 16, lineHeight: 20,
                  width: wide * 0.78, alignSelf: 'center', textAlign: 'center', marginTop: wide * 0.05, opacity: 0.4
                }}>Lorem ipsum dolor sit amet, consectetur
                     adipiscing elit. Etiam vitae turpis libero.</Text>
                <View style={{
                  flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
                  marginTop: wide * 0.05
                }}>
                  <TouchableOpacity style={{
                    backgroundColor: Colors.btnBg,
                    width: wide * 0.45, height: wide * 0.11, borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 16, }}>Stats</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{
                    width: wide * 0.45, height: wide * 0.11, borderRadius: 10, borderWidth: 3,
                    borderColor: 'rgba(255,255,255,0.3)', justifyContent: 'center', alignItems: 'center'
                  }}>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 16, }}>Edit</Text>
                  </TouchableOpacity>
                </View>

              </View>


            </View>
            <View style={{ flex: 1, backgroundColor: Colors.base, marginLeft: 15, marginTop: wide * 0.05 }}>
              <Text style={{
                color: Colors.light, fontFamily: Fonts.Bold, fontSize: 28,
              }}>Highlights</Text>

              <View style={{ flexDirection: 'row', marginTop: wide * 0.05 }}>
                <TouchableOpacity style={{
                  width: wide * 0.25, height: wide * 0.25,
                  justifyContent: 'center', alignItems: 'center',
                }}
                // onPress={() => Navigation.navigate('CategoryList', { selectedCat: item.item, selectedInd: item.index, isFrom: 'brand' })}
                >
                  <View style={{
                    // borderWidth: 1,
                    margin: 5,
                    flex: 1,
                    // borderColor: Colors.lightGray,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: Colors.btnBg,
                    borderRadius: (wide * 0.22) / 2,
                    shadowColor: Colors.lightGray,
                    shadowOffset: { width: 0, height: 0 },
                    shadowOpacity: 1.0, width: '80%', height: '80%'
                  }}>
                    <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 40 }}>
                      +
                    </Text>
                    {
                      // <Image
                      //   source={require("../../Images/avatar.png")}
                      //   // resizeMode="contain"
                      //   style={{ width: '100%', height: '100%', borderRadius: (wide * 0.22) / 2, }}
                      // ></Image>
                    }

                  </View>
                  <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 12 }}>Add New</Text>
                </TouchableOpacity>
                <FlatList

                  data={[1, 2, 3, 4, 5]}
                  renderItem={(item, index) => this._renderHighlights(item, index)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>
              <Text style={{
                color: Colors.light, fontFamily: Fonts.Bold, fontSize: 28, marginTop: wide * 0.05
              }}>Photos</Text>

              <View style={{ flexDirection: 'row', marginTop: wide * 0.05 }}>

                <FlatList

                  data={[1, 2, 3, 4, 5]}
                  renderItem={(item, index) => this._renderPhotos(item, index)}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                />
              </View>

            </View>
          </ScrollView>
          <TouchableOpacity style={{


            flex: 1,

            justifyContent: 'center', alignItems: 'center',
            backgroundColor: Colors.btnBg,
            borderRadius: (wide * 0.2) / 2,
            shadowColor: Colors.lightGray,
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 1.0, width: wide * 0.2, height: wide * 0.2, position: 'absolute',
            right: 10, bottom: wide * 0.05
          }}>
            <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 40 }}>
              +
    </Text>
            <Text style={{ color: Colors.light, fontFamily: Fonts.Medium, fontSize: 13 }}>
              Add Post
    </Text>
            {
              // <Image
              //   source={require("../../Images/avatar.png")}
              //   // resizeMode="contain"
              //   style={{ width: '100%', height: '100%', borderRadius: (wide * 0.22) / 2, }}
              // ></Image>
            }

          </TouchableOpacity>
        </KeyboardAvoidingView>

      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  const { entities } = state;
  return {
    authReducer: state.authReducer,
    User: entities.user,
    Home: entities.home
  };
}

export default connect(mapStateToProps)(Home);
