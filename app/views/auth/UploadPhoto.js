// import React, { Component } from 'react';
// import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
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
// class UploadPhoto extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             avatar: ''
//         };
//     }
//     pickSingle(cropit, circular = false, mediaType) {
//         Alert.alert(
//             'PHOTO',
//             'Please select option',
//             [
//                 {
//                     text: 'Gallery',
//                     onPress: () => {
//                         ImagePicker.openPicker({
//                             width: 500,
//                             height: 500,
//                             cropping: cropit,
//                             cropperCircleOverlay: circular,
//                             sortOrder: 'none',
//                             compressImageMaxWidth: 1000,
//                             compressImageMaxHeight: 1000,
//                             compressImageQuality: 1,
//                             compressVideoPreset: 'MediumQuality',
//                             includeExif: true,
//                             cropperStatusBarColor: 'white',
//                             cropperToolbarColor: 'white',
//                             cropperActiveWidgetColor: 'white',
//                             cropperToolbarWidgetColor: '#3498DB',
//                             mediaType: 'photo'
//                         })
//                             .then((image) => {
//                                 // console.log('received image', image);
//                                 this.setState({ avatar: image.path })

//                             })
//                             .catch((e) => {
//                                 console.log(e);
//                                 // Alert.alert(e.message ? e.message : e);
//                             });
//                     }
//                 },
//                 {
//                     text: 'Camera', onPress: () => {
//                         ImagePicker.openCamera({
//                             width: 300,
//                             height: 400,
//                             cropping: true,
//                             mediaType: 'photo'
//                         }).then(image => {
//                             this.setState({ avatar: image.path })
//                         });
//                     }
//                 },
//                 {
//                     text: 'Cancel',
//                     onPress: () => console.log('Cancel Pressed'),
//                     style: 'cancel'
//                 }
//             ],
//             { cancelable: false }
//         );

//     }


//     render() {
//         const { avatar } = this.state;

//         return (
//             <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>



//                 <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32, }} >


//                     <TouchableOpacity style={{ marginTop: 24, width: wide * 0.1, height: wide * 0.1 }} onPress={() => Navigation.back()}>
//                         <Image style={{
//                             width: wide * 0.1, height: wide * 0.1,
//                             borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
//                         }} source={require('../../Images/back_ico.png')} />
//                     </TouchableOpacity>



//                     <Progress.Bar
//                         progress={UserModel.selectedUserType === 'player' && UserModel.isAdult == false ? 0.4 : 0.5}
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
//                         Upload
//             </Text>
//                     <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
//                         Photo
//             </Text>

//                     <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
//                         <TouchableOpacity onPress={() => this.pickSingle(true, true)}>
//                             {
//                                 avatar === ''
//                                     ?

//                                     <Image source={require('../../Images/placeHolderImage.png')} resizeMode='contain' style={{
//                                         width: wide * 0.8
//                                     }} />

//                                     :

//                                     <View style={{
//                                         height: wide * 0.6, width: wide * 0.6,
//                                         borderRadius: wide * 0.3, justifyContent: 'center',
//                                         alignItems: 'center',
//                                     }}>
//                                         <Image style={{
//                                             height: wide * 0.6, width: wide * 0.6,
//                                             borderRadius: wide * 0.3
//                                         }} source={{ uri: avatar }} resizeMode='cover' />

//                                         <Image source={require('../../Images/CameraIcon.png')}
//                                             style={{ position: 'absolute', tintColor: Colors.shade }} />
//                                     </View>

//                             }

//                         </TouchableOpacity>
//                     </View>




//                 </View>
//                 <TouchableOpacity
//                     key={avatar}
//                     style={{
//                         width: wide * 0.8, height: 48,
//                         backgroundColor: Colors.btnBg,
//                         alignSelf: 'center', borderRadius: 24, opacity: avatar === '' ? 0.3 : 1.0,
//                         justifyContent: 'center', bottom: 40
//                     }} onPress={() => {
//                         if (avatar !== '') {
//                             if (UserModel.selectedUserType === 'coach') {
//                                 Navigation.navigate('AddPhotoIdCoach')
//                             } else if (UserModel.selectedUserType === 'player' && UserModel.isAdult == false) {
//                                 Navigation.navigate('ParentEmail')
//                             } else {
//                                 Navigation.navigate('AddPhotoId')
//                             }

//                         }
//                     }}>
//                     <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
//                 </TouchableOpacity>


//             </SafeAreaView>
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

// export default connect(mapStateToProps)(UploadPhoto);



import React, { useState } from 'react';
import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, ScrollView, TextInput, Image, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';

import {
    Layout,
    Colors,
    Fonts,
} from '../../constants';
import { characterLimit, selectedUserType, UserModel } from '../../constants/constant';


let wide = Layout.width;

export default function UploadPhoto({
    navigation
}) {
    const [avatar, setAvatar] = useState('')

    const pickSingle = (cropit, circular = false, mediaType) => {
        Alert.alert(
            'PHOTO',
            'Please select option',
            [
                {
                    text: 'Gallery',
                    onPress: () => {
                        ImagePicker.openPicker({
                            width: 500,
                            height: 500,
                            cropping: cropit,
                            cropperCircleOverlay: circular,
                            sortOrder: 'none',
                            compressImageMaxWidth: 1000,
                            compressImageMaxHeight: 1000,
                            compressImageQuality: 1,
                            compressVideoPreset: 'MediumQuality',
                            includeExif: true,
                            cropperStatusBarColor: 'white',
                            cropperToolbarColor: 'white',
                            cropperActiveWidgetColor: 'white',
                            cropperToolbarWidgetColor: '#3498DB',
                            mediaType: 'photo'
                        })
                            .then((image) => {
                                // console.log('received image', image);
                                // this.setState({ avatar: image.path })
                                setAvatar(image.path)

                            })
                            .catch((e) => {
                                console.log(e);
                                // Alert.alert(e.message ? e.message : e);
                            });
                    }
                },
                {
                    text: 'Camera', onPress: () => {
                        ImagePicker.openCamera({
                            width: 300,
                            height: 400,
                            cropping: true,
                            mediaType: 'photo'
                        }).then(image => {
                            setAvatar(image.path)
                        });
                    }
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                }
            ],
            { cancelable: false }
        );

    }


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
            <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32, }} >
                <TouchableOpacity style={{ marginTop: 24, width: wide * 0.1, height: wide * 0.1 }} onPress={() => navigation.goBack()}>
                    <Image style={{
                        width: wide * 0.1, height: wide * 0.1,
                        borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
                    }} source={require('../../Images/back_ico.png')} />
                </TouchableOpacity>
                <Progress.Bar
                    progress={UserModel.selectedUserType === 'player' && UserModel.isAdult == false ? 0.4 : 0.5}
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
                    Upload
                </Text>
                <Text style={{ color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
                    Photo
                </Text>

                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => pickSingle(true, true)}>
                        {
                            avatar === ''
                                ?
                                <Image source={require('../../Images/placeHolderImage.png')} resizeMode='contain' style={{
                                    width: wide * 0.8
                                }} />
                                :
                                <View style={{
                                    height: wide * 0.6, width: wide * 0.6,
                                    borderRadius: wide * 0.3, justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Image style={{
                                        height: wide * 0.6, width: wide * 0.6,
                                        borderRadius: wide * 0.3
                                    }} source={{ uri: avatar }} resizeMode='cover' />

                                    <Image source={require('../../Images/CameraIcon.png')}
                                        style={{ position: 'absolute', tintColor: Colors.shade }} />
                                </View>
                        }
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                key={avatar}
                style={{
                    width: wide * 0.8, height: 48,
                    backgroundColor: Colors.btnBg,
                    alignSelf: 'center', borderRadius: 24, opacity: avatar === '' ? 0.3 : 1.0,
                    justifyContent: 'center', bottom: 40
                }} onPress={() => {
                    navigation.navigate('AddPhotoId')
                    // if (avatar !== '') {
                        // if (UserModel.selectedUserType === 'coach') {
                        //     navigation.navigate('AddPhotoIdCoach')
                        // } else if (UserModel.selectedUserType === 'player' && UserModel.isAdult == false) {
                        //     navigation.navigate('ParentEmail')
                        // } else {
                        //     // navigation.navigate('AddPhotoId')
                        //     navigation.navigate('OTPValidate')
                        // }

                    // }
                }}>
                <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}
