import React, { Component } from 'react';
import { View, Keyboard, TouchableOpacity, Text, SafeAreaView, Image, KeyboardAvoidingView, ImageBackground, Alert } from 'react-native';
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
import { NoInternet } from '../../utils/info';
import { characterLimit } from '../../constants/constant';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import * as Progress from 'react-native-progress';
import AnimatedInput from "../../Helpers/react-native-animated-input";
import { isNotch } from '../../utils/deviceInfo';
import ImagePicker from 'react-native-image-crop-picker';

let wide = Layout.width;
class AddPhotoIdCoach extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            avatar: '',
            avatarCerti: ''
        };
    }
    pickSingle(cropit, circular = false, isFrom) {
        Alert.alert(
            isFrom === 'ava' ? 'PHOTO ID' : 'COACHING CERTIFICATE',
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
                                if (isFrom === 'ava') {
                                    this.setState({ avatar: image.path })
                                } else {
                                    this.setState({ avatarCerti: image.path })
                                }
                                // 

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
                            if (isFrom === 'ava') {
                                this.setState({ avatar: image.path })
                            } else {
                                this.setState({ avatarCerti: image.path })
                            }
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


    render() {
        const { avatar, avatarCerti } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>



                <View style={{ flex: 1, backgroundColor: Colors.base, }} >


                    <TouchableOpacity style={{ marginHorizontal: 32, }} onPress={() => Navigation.back()}>
                        <Image style={{
                            width: wide * 0.1, height: wide * 0.1,
                            marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
                        }} source={require('../../Images/back_ico.png')} />
                    </TouchableOpacity>



                    <Progress.Bar
                        progress={0.8}
                        width={wide * 0.8}
                        borderColor={Colors.base}
                        unfilledColor={Colors.borderColor}
                        style={{ marginTop: 16, marginHorizontal: 32, }}
                    />

                    <Text style={{
                        marginTop: 16,
                        color: Colors.light, fontSize: 32,
                        fontFamily: Fonts.Thin, lineHeight: 36, marginHorizontal: 32,
                    }}>
                        One last
            </Text>
                    <Text style={{ color: Colors.light, fontSize: 32, marginHorizontal: 32, lineHeight: 36, fontFamily: Fonts.Bold }}>
                        Step
            </Text>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                        minHeight: isNotch ? Layout.height - wide * 0.9 : Layout.height - wide * 0.7, paddingBottom: isNotch ? 0 : 10
                    }}>
                        <View style={{ flex: 1, alignItems: 'center', marginVertical: wide * 0.1, justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={() => this.pickSingle(true, false, 'ava')}>
                                {
                                    avatar === ''
                                        ?

                                        <Image source={require('../../Images/Placeholder_PhotoId.png')} resizeMode='cover' />

                                        :

                                        <View style={{

                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            paddingVertical: 10
                                        }}>
                                            <Image style={{
                                                height: wide * 0.3, width: wide * 0.46,
                                                borderRadius: 5
                                            }} source={{ uri: avatar }} resizeMode='cover' />

                                            <Image source={require('../../Images/placeHolder_photoid_border.png')}
                                                style={{ position: 'absolute' }} />
                                        </View>

                                }
                                <Text style={{
                                    paddingTop: 10,
                                    color: Colors.borderColor, fontSize: 12,
                                    fontFamily: Fonts.Regular, lineHeight: 16, width: wide * 0.5,
                                    textAlign: 'center', alignSelf: 'center'
                                }}>
                                    For profile verification, try not to skip the process

                        </Text>
                            </TouchableOpacity>
                            <View style={{ position: 'absolute', top: wide * 0.18, bottom: wide * 0.18, left: wide * 0.04, alignItems: 'center', justifyContent: 'center' }}>

                                <Image style={{
                                    width: 40, height: 40

                                }} source={avatar === '' ? require('../../Images/tick_unselected.png') : require('../../Images/tick_selected.png')} />
                                <Image style={{
                                    flex: 1

                                }} source={require('../../Images/seperator_dash.png')} resizeMode='stretch' />
                                <Image style={{
                                    width: 40, height: 40

                                }} source={avatarCerti === '' ? require('../../Images/tick_unselected.png') : require('../../Images/tick_selected.png')} />
                            </View>
                            <TouchableOpacity style={{ marginTop: 30 }} onPress={() => this.pickSingle(true, false, 'certi')}>
                                {
                                    avatarCerti === ''
                                        ?

                                        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 10 }}>
                                            <Image source={require('../../Images/CochingCerti.png')} resizeMode='cover' />
                                            <View style={{ position: 'absolute', alignItems: 'center', paddingVertical: 10 }}>
                                                <Text style={{
                                                    color: Colors.borderColor, fontSize: 14,
                                                    fontFamily: Fonts.XBold, lineHeight: 18
                                                }}>COACHING</Text>
                                                <Text style={{
                                                    color: Colors.borderColor, fontSize: 14,
                                                    fontFamily: Fonts.XBold, lineHeight: 18
                                                }}>CERTIFICATE</Text>
                                            </View>
                                        </View>

                                        :

                                        <View style={{

                                            justifyContent: 'center',
                                            alignItems: 'center', paddingVertical: 10
                                        }}>
                                            <Image style={{
                                                height: wide * 0.3, width: wide * 0.46,
                                                borderRadius: 5
                                            }} source={{ uri: avatarCerti }} resizeMode='cover' />

                                            <Image source={require('../../Images/placeHolder_photoid_border.png')}
                                                style={{ position: 'absolute' }} />
                                        </View>

                                }

                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                <TouchableOpacity
                    key={avatarCerti}
                    style={{
                        width: wide * 0.8, height: 48,
                        backgroundColor: Colors.btnBg,
                        alignSelf: 'center', borderRadius: 24, opacity: avatar === '' && avatarCerti === '' ? 0.3 : 1.0,
                        justifyContent: 'center',
                    }} onPress={() => {
                        if (avatar !== '' && avatarCerti !== '') {
                            //Navigation.navigate('TellUsMore')
                        }
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


            </SafeAreaView >
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

export default connect(mapStateToProps)(AddPhotoIdCoach);
