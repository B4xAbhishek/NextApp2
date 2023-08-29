import React from 'react'
import { View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import FastImage from 'react-native-fast-image'

import styles from '../constants/styles'
import TextComponent from './TextComponent'

export default function LinearGradientImage({
    source,
    title
}) {
    return (
        <View style={[styles.flexRowAlignCenter, styles.verticalPadding, { borderBottomWidth: 0.3, borderBottomColor: '#f0f0f0' }]} >
            <FastImage
                style={[{ height: 200, width: 180, borderRadius: 10,   }]}
                source={source}
                resizeMode={FastImage.resizeMode.cover}
            >
                <LinearGradient colors={['#1A1110', 'transparent', 'transparent', 'transparent', 'transparent']} style={[styles.flex1, {  justifyContent: 'space-between', flexDirection: 'row', padding:4 }]}>
                    <TextComponent numberOfLines={2} title={title} textStyle={{ fontSize: 17, color: 'white' }} />
                    <TextComponent numberOfLines={2} title={23} textStyle={{ fontSize: 17, color: 'white' }} />
                </LinearGradient>
            </FastImage>
           
        </View>
    )
}
