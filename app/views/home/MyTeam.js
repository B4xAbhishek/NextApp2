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
import { color } from 'react-native-reanimated';

let wide = Layout.width;
class MyTeam extends Component {
    static navigationOptions = { header: null };
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }
    componentDidMount() {
    }

    _renderTeam = (item) => {
        return (
            <View style={{
                height: wide * 0.08,
                marginVertical: 5, flexDirection: 'row', justifyContent: 'space-between'
            }}
            >
                <Image
                    source={require("../../Images/avatar.png")}
                    // resizeMode="contain"
                    style={{ width: wide * 0.08, height: '100%', borderRadius: (wide * 0.08) / 2, }}
                ></Image>
                <View style={{ paddingHorizontal: 8, flex: 1 }}>
                    <Text style={{
                        color: Colors.light, fontSize: 12,
                        lineHeight: 16, fontFamily: Fonts.Bold
                    }}>VAM RONDA</Text>
                    <Text style={{
                        color: Colors.light, fontSize: 11,
                        lineHeight: 14, fontFamily: Fonts.Regular
                    }}>PG | #9 | </Text>
                </View>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>
                <Text style={{
                    color: Colors.light, fontSize: 12,
                    lineHeight: 16, fontFamily: Fonts.SemiBold, paddingHorizontal: 5, width: wide * 0.1
                }}>38.2</Text>

            </View>
        );
    };
    render() {


        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: Colors.base }}>

                <KeyboardAvoidingView keyboardVerticalOffset={45} style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? "padding" : null}>


                    <View style={{ flex: 1, backgroundColor: Colors.base, marginHorizontal: 15 }} >

                        <View style={{ marginTop: wide * 0.08 }}>

                            <Text style={{

                                color: Colors.light, fontSize: 32,
                                fontFamily: Fonts.Regular, lineHeight: 40
                            }}>
                                My

            </Text>
                            <Text style={{
                                color: Colors.light, fontSize: 32, lineHeight: 36, fontFamily: Fonts.Bold
                            }}>
                                Team
            </Text>

                        </View>



                        <View style={{ marginTop: wide * 0.1 }}>
                            <Image style={{
                                position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, width: '100%', height: '100%'
                            }} resizeMode={'stretch'} source={require('../../Images/Rectangle.png')} />
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{
                                    width: wide * 0.27, height: wide * 0.32,
                                    marginTop: 24, borderRadius: wide * 0.03, borderWidth: 3,
                                    borderColor: Colors.borderColor, marginLeft: wide * 0.05,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                    <Image style={{ width: '80%', height: '80%', }} resizeMode={'contain'} source={require('../../Images/Los_Angeles_Lakers_logo.png')} />
                                </View>
                                <Text style={{
                                    color: Colors.light, fontSize: 70, fontFamily: Fonts.SemiBold,
                                    marginTop: wide * 0.07, marginLeft: 5,
                                }}>1</Text>
                                <View style={{ marginTop: wide * 0.06, }}>
                                    <Text style={{
                                        color: Colors.light, fontSize: 16, fontFamily: Fonts.SemiBold,
                                        marginLeft: 5, width: wide * 0.16
                                    }}>LA
                                    LAKERS</Text>
                                    <Text style={{
                                        color: Colors.light, fontSize: 16, fontFamily: Fonts.SemiBold,
                                        marginLeft: 5, width: wide * 0.15, marginTop: 6,
                                    }}>
                                        117.0
                                    </Text>

                                </View>
                                <View style={{
                                    marginHorizontal: wide * 0.02,
                                    flex: 1
                                }}>
                                    <View >
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            width: '100%'
                                        }}>
                                            <View >
                                                <Text style={{
                                                    color: Colors.fontColorGray, fontSize: 14, fontFamily: Fonts.Bold,

                                                }}>WIN</Text>
                                                <Text style={{
                                                    color: Colors.light, fontSize: 18, fontFamily: Fonts.Bold,
                                                    marginTop: 6,
                                                }}>
                                                    9
                                    </Text>
                                            </View>
                                            <View >
                                                <Text style={{
                                                    color: Colors.fontColorGray, fontSize: 14, fontFamily: Fonts.Bold,

                                                }}>LOSS</Text>
                                                <Text style={{
                                                    color: Colors.light, fontSize: 18, fontFamily: Fonts.Bold,
                                                    marginTop: 6,
                                                }}>
                                                    4
                                    </Text>
                                            </View>
                                            <View >
                                                <Text style={{
                                                    color: Colors.fontColorGray, fontSize: 14, fontFamily: Fonts.Bold,

                                                }}>W%</Text>
                                                <Text style={{
                                                    color: Colors.light, fontSize: 18, fontFamily: Fonts.Bold,
                                                    marginTop: 6,
                                                }}>
                                                    66%
                                    </Text>
                                            </View>
                                        </View>

                                        <View style={{
                                            flexDirection: 'row', flex: 1,
                                            width: '100%', marginTop: wide * 0.06,
                                        }}>

                                            <View >
                                                <Text style={{
                                                    color: Colors.fontColorGray, fontSize: 14, fontFamily: Fonts.Bold,

                                                }}>STREAK</Text>
                                                <Text style={{
                                                    color: Colors.light, fontSize: 18, fontFamily: Fonts.Bold,
                                                    marginTop: 6,
                                                }}>
                                                    4
                                    </Text>
                                            </View>
                                            <View style={{ marginLeft: 8 }}>
                                                <Text style={{
                                                    color: Colors.fontColorGray, fontSize: 14, fontFamily: Fonts.Bold,

                                                }}>LAST 10</Text>
                                                <Text style={{
                                                    color: Colors.light, fontSize: 18, fontFamily: Fonts.Bold,
                                                    marginTop: 6,
                                                }}>
                                                    3-7
                                    </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>

                            </View>
                        </View>


                        <FlatList
                            style={{ marginTop: wide * 0.08, flex: 1 }}
                            data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 11, 11, 11, 11]}
                            renderItem={(item, index) => this._renderTeam(item, index)}
                            stickyHeaderIndices={[0]}
                            ListHeaderComponent={() => <View style={{
                                height: wide * 0.08,
                                paddingVertical: 5, flexDirection: 'row',
                                justifyContent: 'space-between', backgroundColor: Colors.base
                            }}
                            >

                                <View style={{ paddingHorizontal: 5, flex: 1 }}>
                                    <Text style={{
                                        color: Colors.fontGray, fontSize: 12,
                                        lineHeight: 16, fontFamily: Fonts.Bold
                                    }}>PLAYERS</Text>
                                </View>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>G</Text>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>FG</Text>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>PTS</Text>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>FG%</Text>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>3P%</Text>
                                <Text style={{
                                    color: Colors.fontGray, fontSize: 12,
                                    lineHeight: 16, fontFamily: Fonts.Bold, paddingHorizontal: 5, width: wide * 0.1
                                }}>FT%</Text>

                            </View>}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </KeyboardAvoidingView>

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

export default connect(mapStateToProps)(MyTeam);
