import React, { Component } from 'react'
import { Text, View, Image, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AppStatusBar from '../../components/common/statusBar'
import { Colors, Fonts, Layout } from '../../constants'
import Navigation from '../../lib/Navigation'
import { Pages } from '../../Helpers/react-native-pages';
import { isNotch, STATUSBAR_HEIGHT } from '../../utils/deviceInfo'
import backend from '../../config/backend'
var wide = Layout.width
export default class WelcomeScreen extends Component {

    componentDidMount() {

    }

    handleLogin = (id) => {
        // backend.handleImperativeLogin(id, (status, data) => {
        //     if (status) {
        //         console.log(data);
        //     }
        // })
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
                <View style={{ backgroundColor: Colors.base, marginTop: 30, flex: 1 }}>
                    <Image style={{ width: wide, flex: 1 }}
                        resizeMode={'stretch'}
                        source={require('../../Images/loginImage.png')} />
                    <View style={{ flex: isNotch ? 1 : 1.4, width: wide * 0.8, alignSelf: 'center', marginTop: 50 }}>
                        <Pages
                            containerStyle={{ justifyContent: 'flex-start' }}
                            indicatorColor={Colors.btnBg}
                            indicatorPosition='bottom'
                            horizontal={true}
                        >
                            <Text
                                numberOfLines={3}
                                adjustsFontSizeToFit
                                adjustsFontSizeToFit style={{
                                    color: Colors.light, fontSize: 40,
                                    fontFamily: Fonts.Bold, lineHeight: 48
                                }}>Players, Coaches and Fans. </Text>
                            <Text numberOfLines={3}
                                adjustsFontSizeToFit style={{
                                    color: Colors.light, fontSize: 40,
                                    fontFamily: Fonts.Bold, lineHeight: 48

                                }}>Players, Coaches and Fans. </Text>
                            <Text numberOfLines={3}
                                adjustsFontSizeToFit style={{
                                    color: Colors.light, fontSize: 40,
                                    fontFamily: Fonts.Bold, lineHeight: 48

                                }}>Players, Coaches and Fans. </Text>
                        </Pages>
                    </View>
                    <TouchableOpacity style={{
                        width: wide * 0.8, height: 48,
                        backgroundColor: Colors.btnBg,
                        alignSelf: 'center', borderRadius: 24,
                        justifyContent: 'center', marginTop: 50
                    }} onPress={() => {
                        Navigation.navigate('Login')

                    }}>
                        <Text style={{
                            alignSelf: 'center', color: Colors.light,
                            fontFamily: Fonts.Bold,
                        }}>Sign in with Email </Text>
                    </TouchableOpacity>
                    <View style={{
                        width: Platform.OS === 'ios' ? wide * 0.8 : wide * 0.55,
                        alignSelf: 'center',
                        height: wide * 0.15,
                        marginTop: 16,
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        // backgroundColor: '#ccc',
                        alignItems: 'center'
                    }}>
                        <TouchableOpacity onPress={() => this.handleLogin(0)} style={{
                            width: wide * 0.25, height: wide * 0.15,
                            // marginHorizontal: 5
                        }}>
                            <Image style={{

                                width: wide * 0.25, height: wide * 0.13,
                            }} source={require('../../Images/facebook.png')} />
                        </TouchableOpacity>
                        {
                            Platform.OS === 'ios'
                                ?
                                <TouchableOpacity onPress={() => this.handleLogin(1)} style={{
                                    width: wide * 0.25, height: wide * 0.15,
                                    //  marginHorizontal: 5
                                }}>
                                    <Image style={{
                                        width: wide * 0.25, height: wide * 0.13,

                                    }} source={require('../../Images/apple.png')} />
                                </TouchableOpacity>
                                :
                                null
                        }
                        <TouchableOpacity onPress={() => this.handleLogin(2)} style={{
                            width: wide * 0.25, height: wide * 0.15,
                            //  marginHorizontal: 5
                        }}>
                            <Image style={{
                                width: wide * 0.25, height: wide * 0.13,

                            }} source={require('../../Images/google.png')} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => Navigation.navigate('TrainerPlan')}
                        style={{
                            alignSelf: 'center',
                            marginTop: 32, width: wide * 0.9, justifyContent: 'center',
                            alignItems: 'center', paddingBottom: 20

                        }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: Colors.borderColor, fontSize: 14 }}>By continuing you agree Next Up</Text>
                            <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 14 }} numberOfLines={2}> Terms of
                        </Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 14 }}>Services </Text>
                            <Text style={{ color: Colors.borderColor, fontSize: 14 }}>&</Text>
                            <Text style={{ color: Colors.light, fontFamily: Fonts.Bold, fontSize: 14 }}>Privacy Policy</Text>
                        </View>
                    </TouchableOpacity>

                </View>


            </SafeAreaView>
        )
    }
}