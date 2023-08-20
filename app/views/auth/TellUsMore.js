import React, { Component } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, Image, key, KeyboardAvoidingView } from 'react-native';
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
class TellUsMore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fname: '',
            lname: '',
            dob: 'SELECT DATE',
            aboutMe: '',
            isbtnEnable: false,
            strSelectedMode: 'player',
            isDatePickerVisible: false
        };
        this.inputs = {};
    }
    componentDidMount() {
        UserModel.selectedUserType = 'player'
    }
    checkForButtonEnable = () => {
        const { fname,
            lname,
            dob,
            aboutMe } = this.state;
        if (fname.trim() && lname.trim() && aboutMe.trim() !== '' && dob !== 'SELECT DATE') {
            this.setState({ isbtnEnable: true })
        } else {
            this.setState({ isbtnEnable: false })
        }
    }
    setTextofFields = (frm, txt) => {



        switch (frm) {
            case 'fname':
                this.setState({ fname: txt }, () => {
                    this.checkForButtonEnable()
                })
                break;
            case 'lname':
                this.setState({ lname: txt }, () => {
                    this.checkForButtonEnable()
                })
                break;
            case 'dob':
                this.setState({ isDatePickerVisible: false, dob: txt }, () => {
                    this.checkForButtonEnable()
                })
                break;
            case 'aboutMe':
                this.setState({ aboutMe: txt }, () => {
                    this.checkForButtonEnable()
                })
                break;
            default:
                break;
        }
    }
    calculate_age = (date) => {
        var today = new Date();
        var birthDate = new Date(date);
        console.log("get bod-->", birthDate) // create a date object directly from `dob1` argument
        var age_now = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age_now--;
        }
        console.log('my age', age_now);
        return age_now;
    }
    render() {
        const { isbtnEnable, strSelectedMode, fname,
            lname,
            dob,
            aboutMe, isDatePickerVisible } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
                <View style={{ marginHorizontal: 32, backgroundColor: Colors.base, }}>
                    <TouchableOpacity onPress={() => Navigation.back()}>
                        <Image style={{
                            width: wide * 0.1, height: wide * 0.1,
                            marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
                        }} source={require('../../Images/back_ico.png')} />
                    </TouchableOpacity>



                    <Progress.Bar
                        progress={0.3}
                        width={wide * 0.8}
                        borderColor={Colors.base}
                        unfilledColor={Colors.borderColor}
                        style={{ marginTop: 16 }}
                    />
                </View>
                <KeyboardAvoidingView keyboardVerticalOffset={45} style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : null}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                        minHeight: isNotch ? Layout.height - 170 : Layout.height - 100, paddingBottom: isNotch ? 0 : 10
                    }}>
                        <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32 }} >


                            <Text style={{
                                marginTop: 16,
                                color: Colors.light, fontSize: 32,
                                fontFamily: Fonts.Thin, lineHeight: 36
                            }}>
                                Tell us
            </Text>
                            <Text style={{
                                color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold
                            }}>
                                more
            </Text>
                            <View style={{
                                width: wide * 0.8,

                                height: wide * 0.4,
                                marginTop: 32,
                                justifyContent: 'space-between',
                                flexDirection: 'row'
                            }}>
                                <TouchableOpacity activeOpacity={1} style={{
                                    width: wide * 0.24,
                                    borderWidth: 3, borderRadius: 10,
                                    borderColor: strSelectedMode === 'player' ? Colors.light : Colors.borderColor
                                }}
                                    onPress={() => {

                                        this.setState({ strSelectedMode: 'player' })
                                        UserModel.selectedUserType = 'player'
                                    }
                                    }
                                >
                                    <Image resizeMode={'contain'} style={{
                                        alignSelf: 'center',
                                        marginTop: wide * 0.1,
                                        height: wide * 0.15, width: wide * 0.15,
                                        tintColor: strSelectedMode === 'player' ?
                                            Colors.light : Colors.borderColor
                                    }} source={require('../../Images/player.png')} />
                                    <Text style={{
                                        color: strSelectedMode === 'player' ? Colors.light : Colors.borderColor, alignSelf: 'center',
                                        fontFamily: Fonts.Bold, fontSize: 16, marginTop: wide * 0.04
                                    }}>PLAYER</Text>
                                    {
                                        strSelectedMode === 'player' ?
                                            <Image style={{
                                                position: 'absolute',
                                                right: wide * 0.02,
                                                top: wide * 0.02,
                                                width: 20,
                                                height: 20

                                            }} source={require('../../Images/tick.png')} />
                                            :
                                            null
                                    }

                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{
                                    width: wide * 0.24,
                                    borderWidth: 3, borderRadius: 10, borderColor: strSelectedMode === 'coach' ? Colors.light : Colors.borderColor
                                }}
                                    onPress={() => {
                                        this.setState({ strSelectedMode: 'coach' })
                                        UserModel.selectedUserType = 'coach'
                                    }
                                    }
                                >
                                    <Image resizeMode={'contain'} style={{
                                        alignSelf: 'center',
                                        marginTop: wide * 0.1, height: wide * 0.15, width: wide * 0.15,
                                        tintColor: strSelectedMode === 'coach' ? Colors.light : Colors.borderColor
                                    }} source={require('../../Images/coach.png')} />
                                    <Text style={{
                                        color: strSelectedMode === 'coach' ? Colors.light : Colors.borderColor, alignSelf: 'center',
                                        fontFamily: Fonts.Bold, fontSize: 16, marginTop: wide * 0.04
                                    }}>COACH</Text>
                                    {
                                        strSelectedMode === 'coach' ?
                                            <Image style={{
                                                position: 'absolute',
                                                right: wide * 0.02,
                                                top: wide * 0.02,
                                                width: 20,
                                                height: 20

                                            }} source={require('../../Images/tick.png')} />
                                            :
                                            null
                                    }
                                </TouchableOpacity>
                                <TouchableOpacity activeOpacity={1} style={{
                                    width: wide * 0.24,
                                    borderWidth: 3, borderRadius: 10,
                                    borderColor: strSelectedMode === 'trainer' ? Colors.light : Colors.borderColor
                                }}
                                    onPress={() => {
                                        this.setState({ strSelectedMode: 'trainer' })
                                        UserModel.selectedUserType = 'trainer'
                                    }
                                    }
                                >
                                    <Image resizeMode={'contain'} style={{
                                        alignSelf: 'center',
                                        marginTop: wide * 0.1, height: wide * 0.15, width: wide * 0.15,
                                        tintColor: strSelectedMode === 'trainer' ? Colors.light : Colors.borderColor

                                    }} source={require('../../Images/trainer.png')} />
                                    <Text style={{
                                        color: strSelectedMode === 'trainer' ? Colors.light : Colors.borderColor, alignSelf: 'center',
                                        fontFamily: Fonts.Bold, fontSize: 15, marginTop: wide * 0.04
                                    }}>TRAINER</Text>
                                    {
                                        strSelectedMode === 'trainer' ?
                                            <Image style={{
                                                position: 'absolute',
                                                right: wide * 0.02,
                                                top: wide * 0.02,
                                                width: 20,
                                                height: 20

                                            }} source={require('../../Images/tick.png')} />
                                            :
                                            null
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 60 }}>
                                <AnimatedInput

                                    placeholder="FIRST NAME"
                                    onChangeText={(e) => this.setTextofFields('fname', e)}
                                    value={fname}
                                    styleInput={{
                                        fontFamily: Fonts.Bold,
                                        color: Colors.light,
                                        fontSize: 16, lineHeight: 18
                                    }}
                                    styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                    styleBodyContent={{
                                        borderBottomWidth: 1.5,
                                        borderBottomColor: Colors.borderColor,
                                        width: wide * 0.4
                                    }}
                                />
                                <AnimatedInput

                                    placeholder="LAST NAME"
                                    onChangeText={(e) => this.setTextofFields('lname', e)}
                                    value={lname}
                                    styleInput={{
                                        fontFamily: Fonts.Bold,
                                        color: Colors.light,
                                        fontSize: 16, lineHeight: 18
                                    }}
                                    styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                    styleBodyContent={{
                                        borderBottomWidth: 1.5,
                                        borderBottomColor: Colors.borderColor,
                                        width: wide * 0.4
                                    }}
                                // multiline
                                />
                            </View>
                            <View style={{ marginTop: 20 }}>
                                <Text style={{ fontFamily: Fonts.Bold, color: Colors.borderColor, fontSize: 12 }}>DATE OF BIRTH</Text>
                                <TouchableOpacity style={{
                                    marginTop: 15, borderBottomWidth: 1.5,
                                    borderBottomColor: Colors.borderColor,
                                }} onPress={() => {
                                    this.setState({ isDatePickerVisible: true })
                                }}>
                                    <Text style={{
                                        fontFamily: Fonts.Bold,
                                        paddingVertical: 10, color: dob === 'SELECT DATE' ? Colors.borderColor : Colors.light, fontSize: 16
                                    }}>{dob === 'SELECT DATE' ? dob : moment(dob).format('DD MMM YYYY')}</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: 27 }}>
                                <Text style={{
                                    fontFamily: Fonts.Bold,
                                    color: Colors.light, fontSize: 12, position: 'absolute', right: 0
                                }}>{aboutMe.trim().length}/266</Text>
                                <View style={{ marginTop: 20 }}>

                                    <AnimatedInput

                                        placeholder="ABOUT ME"
                                        //valid={() => isValidEmail(email)}
                                        // errorText="Error"
                                        onChangeText={(e) => this.setTextofFields('aboutMe', e)}
                                        value={aboutMe}
                                        styleInput={{ fontFamily: Fonts.Bold, color: Colors.light, fontSize: 16, lineHeight: 18 }}
                                        styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                        styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                                        multiline
                                        maxLength={266}
                                    />
                                </View>
                            </View>
                            <TouchableOpacity
                                key={isbtnEnable}
                                style={{
                                    width: wide * 0.8, height: 48,
                                    backgroundColor: Colors.btnBg,
                                    alignSelf: 'center', borderRadius: 24, opacity: isbtnEnable === false ? 0.3 : 1.0,
                                    justifyContent: 'center', marginTop: 20,
                                }} onPress={() => {
                                    if (isbtnEnable) {
                                        Navigation.navigate('UploadPhoto')
                                    }
                                }}>
                                <Text style={{
                                    alignSelf: 'center', color: Colors.light,
                                    fontFamily: Fonts.Bold,
                                }}>Continue</Text>
                            </TouchableOpacity>


                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={(date) => {
                        if (this.calculate_age(moment(date, "DD-MM-YYYY").format("YYYY-MM-DD")) <= 16) {
                            UserModel.isAdult = false

                        } else {
                            UserModel.isAdult = true
                        }
                        this.setTextofFields('dob', date.toString())
                    }}
                    onCancel={() => this.setState({ isDatePickerVisible: false })}
                    maximumDate={moment.now()}
                />
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

export default connect(mapStateToProps)(TellUsMore);
