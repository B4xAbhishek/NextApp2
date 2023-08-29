// import React, { Component } from 'react';
// import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground, Alert, Platform } from 'react-native';
// import {
//     Layout,
//     Colors,
//     Fonts,
// } from '../../constants';

// import Navigation from '../../lib/Navigation';

// import AppLoader from '../../utils/Apploader';

// import { login } from '../../actions/auth';
// import { connect } from 'react-redux';
// import { showErrorAlert } from '../../utils/info';
// import isValidEmail from '../../utils/isValidEmail';
// import { NoInternet } from '../../utils/info';
// import { characterLimit, selectedUserType, UserModel } from '../../constants/constant';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Progress from 'react-native-progress';
// import AnimatedInput from "../../Helpers/react-native-animated-input";
// import { isNotch } from '../../utils/deviceInfo';
// import ImagePicker from 'react-native-image-crop-picker';

// let wide = Layout.width;
// class ParentEmail extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             email_num: '',
//             isbtnEnable: false
//         };
//     }
//     setTextofEmailORMobNum = (txt) => {
//         let valid = isValidEmail(txt);
//         if (valid) {
//             this.setState({ isbtnEnable: true, email_num: txt })
//             return
//         } else {
//             let num = txt.replace(".", '');
//             if (isNaN(num)) {

//             } else {
//                 if (num.length > 9) {
//                     this.setState({ isbtnEnable: true, email_num: txt })
//                     return
//                 }

//             }
//         }
//         this.setState({ isbtnEnable: false, email_num: txt.trim() })
//     }

//     render() {
//         const { email_num, isbtnEnable } = this.state;

//         return (
//             <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>



//                 <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32, }} >


//                     <TouchableOpacity onPress={() => Navigation.back()}>
//                         <Image style={{
//                             width: wide * 0.1, height: wide * 0.1,
//                             marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
//                         }} source={require('../../Images/back_ico.png')} />
//                     </TouchableOpacity>



//                     <Progress.Bar
//                         progress={0.5}
//                         width={wide * 0.8}
//                         borderColor={Colors.base}
//                         unfilledColor={Colors.borderColor}
//                         style={{ marginTop: 16 }}
//                     />

//                     <Text style={{
//                         marginTop: 16,
//                         color: Colors.light, fontSize: 32,
//                         fontFamily: Fonts.Thin, lineHeight: 36
//                     }}>
//                         One last
//             </Text>
//                     <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
//                         Step
//             </Text>
//                     <View style={{ marginTop: wide * 0.15 }}>

//                         <AnimatedInput

//                             placeholder="PARENT’S EMAIL OR PHONE NUMBER"
//                             //valid={() => isValidEmail(email)}
//                             // errorText="Error"
//                             onChangeText={(e) => this.setTextofEmailORMobNum(e)}
//                             value={email_num}
//                             styleInput={{
//                                 fontFamily: Fonts.Bold, color: Colors.light,
//                                 fontSize: Platform.OS === 'ios' ? 16 : 14, lineHeight: 18
//                             }}
//                             styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor, }}
//                             styleBodyContent={{
//                                 borderBottomWidth: 1.5,
//                                 borderBottomColor: Colors.borderColor, width: wide * 0.8
//                             }}
//                             keyboardType={'email-address'}
//                         />
//                     </View>

//                 </View>
//                 <TouchableOpacity
//                     key={isbtnEnable}
//                     style={{
//                         width: wide * 0.8, height: 48,
//                         backgroundColor: Colors.btnBg,
//                         alignSelf: 'center', borderRadius: 24, opacity: isbtnEnable == false ? 0.3 : 1.0,
//                         justifyContent: 'center', bottom: 40
//                     }} onPress={() => {

//                         if (isbtnEnable) {
//                             UserModel.parentNameOrNum = email_num
//                             Navigation.navigate('OTPValidate')
//                         }

//                     }}>
//                     <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
//                 </TouchableOpacity>


//             </SafeAreaView >
//         );
//     }
// }

// function mapStateToProps(state) {
//     const { entities } = state;
//     return {
//         authReducer: state.authReducer,
//         User: entities.user,
//         Home: entities.home
//     };
// }

// export default connect(mapStateToProps)(ParentEmail);


import React, { useState } from 'react'
import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground, Alert, Platform } from 'react-native';
import * as Progress from 'react-native-progress';

import {
    Layout,
    Colors,
    Fonts,
} from '../../constants';
import isValidEmail from '../../utils/isValidEmail';
import { characterLimit, selectedUserType, UserModel } from '../../constants/constant';
import AnimatedInput from "../../Helpers/react-native-animated-input";

let wide = Layout.width;

export default function ParentEmail({
    navigation
}) {
    const [email_num, setEmail_Num] = useState('')
    const [isbtnEnable, setIsbtnEnable] = useState('')

    const setTextofEmailORMobNum = (txt) => {
        let valid = isValidEmail(txt);
        if (valid) {
            setIsbtnEnable(true)
            setEmail_Num(txt)
            // this.setState({ isbtnEnable: true, email_num: txt })
            return
        } else {
            let num = txt.replace(".", '');
            if (isNaN(num)) {

            } else {
                if (num.length > 9) {
                    setIsbtnEnable(true)
                    setEmail_Num(txt)
                    // this.setState({ isbtnEnable: true, email_num: txt })
                    return
                }
            }
        }
        // this.setState({ isbtnEnable: false, email_num: txt.trim() })
        setIsbtnEnable(true)
        setEmail_Num(txt.trim())
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
            <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32, }} >
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{
                        width: wide * 0.1, height: wide * 0.1,
                        marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
                    }} source={require('../../Images/back_ico.png')} />
                </TouchableOpacity>

                <Progress.Bar
                    progress={0.5}
                    width={wide * 0.8}
                    borderColor={Colors.base}
                    unfilledColor={Colors.borderColor}
                    style={{ marginTop: 16 }}
                />

                <Text style={{
                    marginTop: 16,
                    color: Colors.light, fontSize: 32,
                    fontFamily: Fonts.Thin, lineHeight: 36
                }}>
                    One last
                </Text>
                <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
                    Step
                </Text>
                <View style={{ marginTop: wide * 0.15 }}>

                    <AnimatedInput

                        placeholder="PARENT’S EMAIL OR PHONE NUMBER"
                        //valid={() => isValidEmail(email)}
                        // errorText="Error"
                        onChangeText={(e) => setTextofEmailORMobNum(e)}
                        value={email_num}
                        styleInput={{
                            fontFamily: Fonts.Bold, color: Colors.light,
                            fontSize: Platform.OS === 'ios' ? 16 : 14, lineHeight: 18
                        }}
                        styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor, }}
                        styleBodyContent={{
                            borderBottomWidth: 1.5,
                            borderBottomColor: Colors.borderColor, width: wide * 0.8
                        }}
                        keyboardType={'email-address'}
                    />
                </View>

            </View>
            <TouchableOpacity
                key={isbtnEnable}
                style={{
                    width: wide * 0.8, height: 48,
                    backgroundColor: Colors.btnBg,
                    alignSelf: 'center', borderRadius: 24, opacity: isbtnEnable == false ? 0.3 : 1.0,
                    justifyContent: 'center', bottom: 40
                }} onPress={() => {
                    navigation.navigate('OTPValidate')
                    // if (isbtnEnable) {
                    //     UserModel.parentNameOrNum = email_num
                    //     navigation.navigate('OTPValidate')
                    // }

                }}>
                <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView >
    )
}

