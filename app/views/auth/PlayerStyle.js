import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Dimensions, Image, ScrollView, Text } from 'react-native'
import { Button } from '@ui-kitten/components'
import { IndexPath, Input, Select, SelectItem } from '@ui-kitten/components';
import FastImage from 'react-native-fast-image';
import OTPInputView from '@twotalltotems/react-native-otp-input'

import styles from '../../constants/styles'
import { appImages } from '../../utils/images'
import { Colors } from '../../constants'
import { CONST_VALUES, strings } from '../../constants/constant'
import TextComponent from '../../utils/TextComponent';

export default function PlayerStyle({
    navigation
}) {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [stateSelectedIndex, setStateSelectedIndex] = useState(new IndexPath(0))
    const [citySelectedIndex, setCitySelectedIndex] = useState(new IndexPath(0))
    const [heightSelectedIndex, setHeightSelectedIndex] = useState(new IndexPath(0))
    const [weightSelectedIndex, setWeightSelectedIndex] = useState(new IndexPath(0))
    const [dob, setDob] = useState(new Date())

    const renderIcon = () => {

    }

    const playerStylePics = [
        appImages.maleAtheletic,
        appImages.maleDefender,
        appImages.maleShooter,
        appImages.malePlayMaker,
        appImages.maleAllRound,
    ]

    return (
        <SafeAreaView style={[styles.flex1, styles.baseBg]}>
            <ScrollView style={[styles.p10, styles.mt10, styles.mb10, styles.flex1]} contentContainerStyle={{ flex: 1, padding: 10, justifyContent: 'space-between', flexDirection: 'column' }}>
                <KeyboardAvoidingView style={[styles.flex1,]}>
                    <View>
                        <View style={[styles.flexRowAlignCenter, styles.mb15]}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Image style={{
                                    width: CONST_VALUES.WIDE * 0.1, height: CONST_VALUES.WIDE * 0.1,
                                    borderRadius: 10,
                                    padding: 10
                                }} source={appImages.backIcon} />
                            </TouchableOpacity>
                            <TextComponent title={strings.SELECT_PLAYER_STYLE} textStyle={{ color: 'white', fontSize: 20, paddingHorizontal: 20 }} />
                        </View>
                        <View style={[styles.flexRowAlignCenter, { flexWrap: 'wrap', justifyContent: 'center', }]}>
                            {
                                playerStylePics.map((item, index) => {
                                    return <FastImage
                                        key={index}
                                        style={[{ height: (Dimensions.get('screen').width / 3), width: '30%', borderRadius: 10, margin: 4, borderWidth: 1, borderColor: 'white' }]}
                                        source={item}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                })
                            }
                        </View>
                    </View>
                    <View style={{ flex: 1, paddingVertical: 20 }}>
                        <TextComponent title={strings.WHAT_TYPE_OF_PLAYER} textStyle={{ color: 'white', fontSize: 15 }} />
                        <TextComponent title={strings.PLAYER_TYPE_DESCRIPTION} textStyle={{ color: 'white', fontSize: 13 }} />
                        <View style={{ flex: 1, paddingVertical: 10 }}>
                            <TextComponent title={strings.STATS_OF_FOCUS} textStyle={{ color: 'white', fontSize: 20 }} />
                            <OTPInputView
                                style={{ flex: 0.5, paddingVertical: 20 }}
                                pinCount={4}
                                codeInputFieldStyle={{
                                    width: 50,
                                    height: 50,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    backgroundColor: '#23262F',
                                    borderColor: '#23262F'
                                }}
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>
                    </View>
                    <View>
                        <Button status='primary' style={{ borderRadius: 28, marginVertical: 2, padding: 5, justifyContent: 'center', marginHorizontal: 30 }}>
                            {strings.CONFIRM}
                        </Button>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    )
}


