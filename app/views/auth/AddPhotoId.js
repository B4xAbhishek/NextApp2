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
// import { characterLimit } from '../../constants/constant';
// import { ScrollView, TextInput } from 'react-native-gesture-handler';
// import * as Progress from 'react-native-progress';
// import AnimatedInput from "../../Helpers/react-native-animated-input";
// import { isNotch } from '../../utils/deviceInfo';
// import ImagePicker from 'react-native-image-crop-picker';

// let wide = Layout.width;
// class AddPhotoId extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             loading: false,
//             avatar: ''
//         };
//     }
//     pickSingle(cropit, circular = false, mediaType) {
//         Alert.alert(
//             'PHOTO ID',
//             'Pick from',
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


//                     <TouchableOpacity onPress={() => Navigation.back()}>
//                         <Image style={{
//                             width: wide * 0.1, height: wide * 0.1,
//                             marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1,
//                             borderColor: Colors.borderColor
//                         }} source={require('../../Images/back_ico.png')} />
//                     </TouchableOpacity>



//                     <Progress.Bar
//                         progress={0.8}
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
//                     <Text style={{
//                         marginTop: 12,
//                         color: Colors.light, fontSize: 12,
//                         fontFamily: Fonts.Regular, lineHeight: 16
//                     }}>
//                         To get your profile verified, upload photo ID
//             </Text>
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         <TouchableOpacity onPress={() => this.pickSingle(true, false)}>
//                             {
//                                 avatar === ''
//                                     ?

//                                     <Image source={require('../../Images/Placeholder_PhotoId.png')} resizeMode='cover' />

//                                     :

//                                     <View style={{

//                                         justifyContent: 'center',
//                                         alignItems: 'center', paddingVertical: 10
//                                     }}>
//                                         <Image style={{
//                                             height: wide * 0.3, width: wide * 0.46,
//                                             borderRadius: 5
//                                         }} source={{ uri: avatar }} resizeMode='cover' />

//                                         <Image source={require('../../Images/placeHolder_photoid_border.png')}
//                                             style={{ position: 'absolute' }} />
//                                     </View>

//                             }

//                         </TouchableOpacity>
//                         <Text style={{
//                             marginTop: 16,
//                             color: Colors.borderColor, fontSize: 12,
//                             fontFamily: Fonts.Regular, lineHeight: 16, width: wide * 0.5, textAlign: 'center'
//                         }}>
//                             For profile verification, try not to skip the process
//             </Text>
//                     </View>




//                 </View>
//                 <TouchableOpacity
//                     key={avatar}
//                     style={{
//                         width: wide * 0.8, height: 48,
//                         backgroundColor: Colors.btnBg,
//                         alignSelf: 'center', borderRadius: 24, opacity: avatar === '' ? 0.3 : 1.0,
//                         justifyContent: 'center',
//                     }} onPress={() => {
//                         if (avatar !== '') {
//                             //Navigation.navigate('TellUsMore')
//                         }
//                     }}>
//                     <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity>
//                     <Text style={{
//                         marginTop: 12,
//                         color: Colors.light, fontSize: 12,
//                         fontFamily: Fonts.Medium, lineHeight: 16, alignSelf: 'center', marginBottom: 10
//                     }}>
//                         Skip
//             </Text>
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

// export default connect(mapStateToProps)(AddPhotoId);

import React, { useState } from 'react';
import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
import * as Progress from 'react-native-progress';
import ImagePicker from 'react-native-image-crop-picker';

import {
    Layout,
    Colors,
    Fonts,
} from '../../constants';

let wide = Layout.width;

export default function AddPhotoId({
    navigation
}) {
    const [avatar, setAvatar] = useState('')

    const pickSingle = (cropit, circular = false, mediaType) => {
        Alert.alert(
            'PHOTO ID',
            'Pick from',
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
                            // this.setState({ avatar: image.path })
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
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{
                        width: wide * 0.1, height: wide * 0.1,
                        marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1,
                        borderColor: Colors.borderColor
                    }} source={require('../../Images/back_ico.png')} />
                </TouchableOpacity>
                <Progress.Bar
                    progress={0.8}
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
                <Text style={{
                    marginTop: 12,
                    color: Colors.light, fontSize: 12,
                    fontFamily: Fonts.Regular, lineHeight: 16
                }}>
                    To get your profile verified, upload photo ID
                </Text>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => pickSingle(true, false)}>
                        {
                            avatar === ''
                                ?
                                <Image source={require('../../Images/Placeholder_PhotoId.png')} resizeMode='cover' />
                                :
                                <View style={{
                                    justifyContent: 'center',
                                    alignItems: 'center', paddingVertical: 10
                                }}>
                                    <Image style={{
                                        height: wide * 0.3, width: wide * 0.46,
                                        borderRadius: 5
                                    }} source={{ uri: avatar }} resizeMode='cover' />

                                    <Image source={require('../../Images/placeHolder_photoid_border.png')}
                                        style={{ position: 'absolute' }} />
                                </View>
                        }
                    </TouchableOpacity>
                    <Text style={{
                        marginTop: 16,
                        color: Colors.borderColor, fontSize: 12,
                        fontFamily: Fonts.Regular, lineHeight: 16, width: wide * 0.5, textAlign: 'center'
                    }}>
                        For profile verification, try not to skip the process
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                key={avatar}
                style={{
                    width: wide * 0.8, height: 48,
                    backgroundColor: Colors.btnBg,
                    alignSelf: 'center', borderRadius: 24, opacity: avatar === '' ? 0.3 : 1.0,
                    justifyContent: 'center',
                }} onPress={() => {
                    navigation.navigate('AddPhotoIdCoach')
                    // if (avatar !== '') {
                    //     //Navigation.navigate('TellUsMore')
                    // }
                }}>
                <Text style={{ alignSelf: 'center', color: Colors.light, fontFamily: Fonts.Bold, }}>Continue</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{
                    marginTop: 12,
                    color: Colors.light, fontSize: 12,
                    fontFamily: Fonts.Medium, lineHeight: 16, alignSelf: 'center', marginBottom: 10
                }}>
                    Skip
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

