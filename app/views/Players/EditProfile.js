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
class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            fname: 'Vineet',
            lname: 'Kumar',
            dob: 'Nov 26 1993',

            isbtnEnable: false,

            isDatePickerVisible: false,
            email: 'name@gmail.com',
            num: '7868767687',
            password: 'dfddsfsdfdf'
        };
        this.inputs = {};
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
        const { isbtnEnable, fname,
            lname,
            dob,
            isDatePickerVisible } = this.state;

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>
                <View style={{ marginHorizontal: 32, backgroundColor: Colors.base, }}>
                    <TouchableOpacity onPress={() => Navigation.back()}>
                        <Image style={{
                            width: wide * 0.1, height: wide * 0.1,
                            marginTop: 24, borderRadius: wide * 0.03, borderWidth: 1, borderColor: Colors.borderColor
                        }} source={require('../../Images/back_ico.png')} />
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView keyboardVerticalOffset={45} style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : null}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                        minHeight: isNotch ? Layout.height - 170 : Layout.height - 100, paddingBottom: isNotch ? 0 : 10
                    }}>
                        <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 32 }} >

                            <View style={{ alignSelf: 'center' }}>
                                <Image style={{
                                    width: wide * 0.3, height: wide * 0.45,
                                    marginTop: 24, borderRadius: wide * 0.03, borderWidth: 3, borderColor: Colors.borderColor
                                }} source={require('../../Images/avatar.png')} />
                                <TouchableOpacity style={{
                                    width: wide * 0.3, height: wide * 0.2,
                                    bottom: 0, position: 'absolute', alignItems: 'center'
                                }}>
                                    <Image style={{
                                        width: '100%', height: '100%',
                                    }} resizeMode={'stretch'} source={require('../../Images/edit_profile_gradiant.png')} />
                                    <Image source={require('../../Images/camera_icon2.png')}
                                        resizeMode={'contain'}
                                        style={{ position: 'absolute', bottom: 10, width: 25, height: 25, tintColor: Colors.shade }} />
                                </TouchableOpacity>

                            </View>

                            <Text style={{
                                color: Colors.light, fontSize: 24, lineHeight: 26,
                                fontFamily: Fonts.Bold, marginTop: wide * 0.08
                            }}>
                                Account
            </Text>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: wide * 0.15 }}>
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
                            <View style={{ marginTop: wide * 0.13 }}>
                                <AnimatedInput

                                    placeholder="EMAIL ID"
                                    //valid={() => isValidEmail(email)}
                                    // errorText="Error"
                                    // onChangeText={(e) => this.setTextofEmailAndPass('email', e)}
                                    value={this.state.email}
                                    styleInput={{
                                        fontFamily: Fonts.Bold, color: Colors.light,
                                        fontSize: 16, lineHeight: 18
                                    }}
                                    styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                    styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                                    keyboardType={'email-address'}

                                />
                            </View>
                            <View style={{ marginTop: wide * 0.1 }}>
                                <AnimatedInput

                                    placeholder="PHONE NUMBER"
                                    //valid={() => isValidEmail(email)}
                                    // errorText="Error"
                                    onChangeText={(e) => this.setTextofEmailAndPass('email', e)}
                                    value={this.state.num}
                                    styleInput={{
                                        fontFamily: Fonts.Bold, color: Colors.light,
                                        fontSize: 16, lineHeight: 18
                                    }}
                                    styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                    styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                                    keyboardType={'number-pad'}

                                />
                            </View>
                            <Text style={{
                                color: Colors.light, fontSize: 24, lineHeight: 26,
                                fontFamily: Fonts.Bold, marginTop: wide * 0.06
                            }}>
                                Password
            </Text>
                            <View style={{ marginTop: wide * 0.13 }}>


                                <AnimatedInput

                                    placeholder="OLD PASSWORD"
                                    //valid={() => isValidEmail(email)}
                                    // errorText="Error"
                                    // onChangeText={(e) => this.setTextofEmailAndPass('pass', e)}
                                    value={this.state.password}
                                    styleInput={{ fontFamily: Fonts.Bold, color: Colors.light, fontSize: 16, lineHeight: 18 }}
                                    styleLabel={{ fontFamily: Fonts.Bold, color: Colors.borderColor }}
                                    styleBodyContent={{ borderBottomWidth: 1.5, borderBottomColor: Colors.borderColor, width: wide * 0.8 }}
                                    secureTextEntry={true}

                                />
                            </View>
                            <View style={{
                                flexDirection: 'row', justifyContent:
                                    'space-between', marginTop: wide * 0.13
                            }}>
                                <AnimatedInput

                                    placeholder="NEW PASSWORD"
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
                                    secureTextEntry={true}

                                />
                                <AnimatedInput

                                    placeholder="CONFIRM PASSWORD"
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
                                    secureTextEntry={true}

                                // multiline
                                />
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
                                }}>Save</Text>
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

export default connect(mapStateToProps)(EditProfile);
