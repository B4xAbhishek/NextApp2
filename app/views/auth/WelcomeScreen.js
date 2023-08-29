import React from 'react'
import { View, Image, SafeAreaView, Platform } from 'react-native'

import styles from '../../constants/styles'
import { CONST_VALUES, strings } from '../../constants/constant'
import { appImages } from '../../utils/images'
import TextComponent from '../../utils/TextComponent'
import { Colors, Fonts } from '../../constants'
import SocialButton from '../../utils/SocialButton'
import { TouchableOpacity } from 'react-native-gesture-handler'

const loginOptions = [
    {
        text: strings.CONTINUE_WITH_Apple,
        logo: appImages.apple_logo,
        imageStyle:styles.midSizeLogo
    },
    {
        text: strings.CONTINUE_WITH_Meta,
        logo: appImages.fb_logo,
        imageStyle:styles.midSizeLogo
    },
    {
        text: strings.CONTINUE_WITH_Google,
        logo: appImages.google_logo,
        imageStyle:styles.normalSizeLogo
    },
]

export default function WelcomeScreen() {
    return (
        <SafeAreaView style={styles.appThemeBgContainer}>
            <Image style={[styles.flex75, styles.width100]} resizeMode={'contain'} source={appImages.login_logo} />
            <View style={styles.appThemeBgContainer}>
                <View style={[styles.alignCenter, { width: '50%' }]}>
                    <TextComponent
                        title={strings.PLAYERS_COACHES_FANS}
                        numberOfLines={3}
                        textStyle={styles.titleFont}
                    />
                </View>
                {
                    loginOptions.map((item, index) => {
                        return <View key={index} style={[styles.mt10, styles.mb10, styles.ph10, {marginHorizontal:10}]}>
                            <SocialButton
                                buttonContainerStyle={[styles.flexRowAlignCenter, styles.socialLoginButton, styles.oynxBlueBorder]}
                                title={item.text}
                                textStyle={{ color: 'white', paddingHorizontal: 15 }}
                                imageSrc={item.logo}
                                imageStyle={item.imageStyle} />
                        </View>
                    })
                }
            </View>
            <View style={[styles.flexRowAlignCenter, styles.ph20, { paddingVertical:10,justifyContent: 'center',  flexWrap: 'wrap' }]}>
                <View style={[styles.flexRowAlignCenter, styles.p5, { justifyContent: 'center',  flexWrap: 'wrap' }]}>
                <TextComponent textStyle={{ color: '#9598A1', fontSize: 15 }} title={strings.AGREE_NEXT} />
                <TouchableOpacity>
                    <TextComponent title={strings.TERMS_SERVICES} textStyle={{ color: '#246BFD', fontSize: 15, paddingHorizontal: 3 }} />
                </TouchableOpacity>
                <TextComponent textStyle={{ color: '#9598A1' }} title='&' />

                <TouchableOpacity>
                    <TextComponent title={strings.PRIVACY_POLICY} textStyle={{ color: '#246BFD', fontSize: 15, paddingHorizontal: 3 }} />
                </TouchableOpacity>
                </View>
                
            </View>
        </SafeAreaView>
    )
}
