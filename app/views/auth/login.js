// import React, { Component } from 'react';
// import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
// import {
// Container,
//   SafeContainer,
//   Layout,
//   CommonStyles,
//   Colors,
//   Fonts,
// } from '../../constants';
// import { SubmitButtons } from '../../components/common/button';

// import Navigation from '../../lib/Navigation';

// import AppLoader from '../../utils/Apploader';

// import { login } from '../../actions/auth';
// import { connect } from 'react-redux';
// import { showErrorAlert } from '../../utils/info';
// import isValidEmail from '../../utils/isValidEmail';
// import { NoInternet } from '../../utils/info';
// import { characterLimit } from '../../constants/constant';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Progress from 'react-native-progress';
// import AnimatedInput from "../../Helpers/react-native-animated-input";
// import { isNotch } from '../../utils/deviceInfo';
// import backend from '../../config/backend';

// let wide = Layout.width;
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       email: '',
//       password: '',
//       isbtnEnable: false
//     };
//     this.inputs = {};
//   }

//   loginUser = () => {
//     const { email, password } = this.state;


//     backend.handleLoginWithEmailAndPass(email, password, (status, data) => {
//       if (status) {
//         if (data === 'new') {
//           Navigation.navigate('TellUsMore')
//         } else {
//           //navigate to home
//         }
//       } else {
//         alert(data)
//       }
//     })


//   };
//   setTextofEmailAndPass = (frm, txt) => {

//     const { email, password } = this.state;
//     if (frm === 'email') {
//       let valid = isValidEmail(txt);
//       if (valid && password.length > characterLimit.password - 1) {
//         this.setState({ isbtnEnable: true, email: txt.trim() })

//       } else {
//         this.setState({ isbtnEnable: false, email: txt.trim() })
//       }

//     } else {
//       let valid = isValidEmail(email);
//       if (txt.trim().length > characterLimit.password - 1 && valid) {
//         this.setState({ isbtnEnable: true, password: txt.trim() })

//       } else {
//         this.setState({ isbtnEnable: false, password: txt.trim() })
//       }

//     }
//   }
//   render() {
//     const { isbtnEnable } = this.state;

//     return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
//         <View style={{ marginHorizontal: 32, backgroundColor: Colors.base, }}>
//           <TouchableOpacity onPress={() => Navigation.back()}>
//             <Image style={{
//               width: wide * 0.1, height: wide * 0.1,
//               marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
//             }} source={require('../../Images/back_ico.png')} />
//           </TouchableOpacity>



//           <Progress.Bar
//             progress={0.1}
//             width={wide * 0.8}
//             borderColor={Colors.base}
//             unfilledColor={Colors.borderColor}
//             style={{ marginTop: 16 }}
//           />
//         </View>
//         <KeyboardAvoidingView keyboardVerticalOffset={20} style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : null}>
//           <ScrollView contentContainerStyle={{ minHeight: isNotch ? Layout.height - 170 : Layout.height - 100 }}>
//             <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32, }} >




//               <Text style={{
//                 marginTop: 16,
//                 color: Colors.light, fontSize: 32,
//                 fontFamily: Fonts.Thin, lineHeight: 36
//               }}>
//                 Sign in
//             </Text>
//               <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
//                 with Email
//             </Text>


//               <View style={{ flex: 1, justifyContent: 'center' }}>
//                 <AnimatedInput

//                   placeholder="YOUR EMAIL"
//                   //valid={() => isValidEmail(email)}
//                   // errorText="Error"
//                   onChangeText={(e) => this.setTextofEmailAndPass('email', e)}
//                   value={this.state.email}
//                   styleInput={{
//                     fontFamily: Fonts.Bold, color: Colors.light,
//                     fontSize: 16, lineHeight: 18
//                   }}
//                   styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
//                   styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
//                   keyboardType={'email-address'}
//                 />
//               </View>
//               <View style={{ flex: 1.8 }}>
//                 <AnimatedInput

//                   placeholder="PASSWORD"
//                   //valid={() => isValidEmail(email)}
//                   // errorText="Error"
//                   onChangeText={(e) => this.setTextofEmailAndPass('pass', e)}
//                   value={this.state.password}
//                   styleInput={{ fontFamily: Fonts.Bold, color: Colors.light, fontSize: 16, lineHeight: 18 }}
//                   styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
//                   styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
//                   secureTextEntry={true}
//                 />
//               </View>

//               <TouchableOpacity
//                 key={isbtnEnable}
//                 style={{
//                   width: wide * 0.8, height: 48,
//                   backgroundColor: Colors.btnBg,
//                   alignSelf: 'center', borderRadius: 24, opacity: isbtnEnable === false ? 0.3 : 1.0,
//                   justifyContent: 'center', bottom: 40, position: 'absolute'
//                 }} onPress={() => {
//                   if (isbtnEnable) {
//                     this.loginUser()
//                   }
//                 }}>
//                 <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
//               </TouchableOpacity>



//             </View>

//           </ScrollView>
//         </KeyboardAvoidingView>
//       </SafeAreaView>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { entities } = state;
//   return {
//     authReducer: state.authReducer,
//     User: entities.user,
//     Home: entities.home
//   };
// }

// export default connect(mapStateToProps)(Login);

import React, {useState} from 'react'
import { View, Keyboard, TouchableOpacity, Text,ScrollView, SafeAreaView, Image, KeyboardAvoidingView } from 'react-native';
import * as Progress from 'react-native-progress';

import {
  Container,
  SafeContainer,
  Layout,
  CommonStyles,
  Colors,
  Fonts,
} from '../../constants';
import backend from '../../config/backend';
import { isNotch } from '../../utils/deviceInfo';
import AnimatedInput from "../../Helpers/react-native-animated-input";


const wide = Layout.width;

export default function Login({
  navigation
}) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isbtnEnable, setIsBtnEnable] = useState(true)

  loginUser = () => {
    navigation.navigate('TellUsMore')
    // backend.handleLoginWithEmailAndPass(email, password, (status, data) => {
    //   if (status) {
    //     if (data === 'new') {
    //       navigation.navigate('TellUsMore')
    //     } else {
    //       //navigate to home
    //     }
    //   } else {
    //     alert(data)
    //   }
    // })
  };


  setTextofEmailAndPass = (frm, txt) => {
    if (frm === 'email') {
      let valid = isValidEmail(txt);
      if (valid && password.length > characterLimit.password - 1) {
        setIsBtnEnable(true)
        setEmail(txt.trim())
        // this.setState({ isbtnEnable: true, email: txt.trim() })
      } else {
        setIsBtnEnable(false)
        setEmail(txt.trim())
        // this.setState({ isbtnEnable: false, email: txt.trim() })
      }
    } else {
      let valid = isValidEmail(email);
      if (txt.trim().length > characterLimit.password - 1 && valid) {
        setIsBtnEnable(true)
        setPassword(txt.trim())
        // this.setState({ isbtnEnable: true, password: txt.trim() })
      } else {
        setIsBtnEnable(false)
        setPassword(txt.trim())
        // this.setState({ isbtnEnable: false, password: txt.trim() })
      }
    }
  }

  return (
    <>
      <View style={{ backgroundColor: Colors.base, padding:10}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image style={{
            width: wide * 0.1, height: wide * 0.1,
            marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
          }} source={require('../../Images/back_ico.png')} />
        </TouchableOpacity>
        <Progress.Bar
          progress={0.1}
          width={wide * 0.8}
          borderColor={Colors.base}
          unfilledColor={Colors.borderColor}
          style={{ marginTop: 16 }}
        />
      </View>
      <KeyboardAvoidingView keyboardVerticalOffset={20} style={{ flex: 1,  }} behavior={Platform.OS === 'ios' ? "padding" : null}>
        <ScrollView contentContainerStyle={{ minHeight: isNotch ? Layout.height - 170 : Layout.height - 100 }}>
          <View style={{ flex: 1, backgroundColor: Colors.base,padding:10, }} >
            <Text style={{
              marginTop: 16,
              color: Colors.light, fontSize: 32,
              fontFamily: Fonts.Thin, lineHeight: 36,
              
            }}>
              Sign in
            </Text>
            <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
              with Email
            </Text>

            <View style={{ flex: 1, justifyContent: 'center', padding:10, }}>
              <AnimatedInput
                placeholder="YOUR EMAIL"
                //valid={() => isValidEmail(email)}
                // errorText="Error"
                onChangeText={(e) => setTextofEmailAndPass('email', e)}
                value={email}
                styleInput={{
                  fontFamily: Fonts.Bold, color: Colors.light,
                  fontSize: 16, lineHeight: 18
                }}
                styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                keyboardType={'email-address'}
              />
            </View>
            <View style={{ flex: 1.8 }}>
              <AnimatedInput
                placeholder="PASSWORD"
                //valid={() => isValidEmail(email)}
                // errorText="Error"
                onChangeText={(e) => this.setTextofEmailAndPass('pass', e)}
                value={password}
                styleInput={{ fontFamily: Fonts.Bold, color: Colors.light, fontSize: 16, lineHeight: 18 }}
                styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                secureTextEntry={true}
              />
            </View>
            <TouchableOpacity
              key={isbtnEnable}
              style={{
                width: wide * 0.8, height: 48,
                backgroundColor: Colors.btnBg,
                alignSelf: 'center', borderRadius: 24, opacity: isbtnEnable === false ? 0.3 : 1.0,
                justifyContent: 'center', bottom: 40, position: 'absolute'
              }} onPress={() => {
                if (isbtnEnable) {
                  this.loginUser()
                }
              }}>
              <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  )
}
