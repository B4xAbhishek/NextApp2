import React from 'react'
import { TouchableOpacity, Image,View } from 'react-native'

import TextComponent from './TextComponent'
import styles from '../constants/styles'

export default function SocialButton({
    buttonContainerStyle = '',
    imageSrc = '',
    imageStyle = '',
    resizeMode = 'contain',
    title = '',
    textContainerStyle = '',
    textStyle = '',
    onPressButton = () => { }
}) {
    return (
        <TouchableOpacity style={[styles.flexRowAlignCenter, buttonContainerStyle]} onPress={onPressButton}>
            <View style={{  alignItems:'flex-end', flex:0.5}}>
                <Image style={imageStyle} resizeMode={resizeMode} source={imageSrc} />
            </View>
            <View style={{ alignItems:'flex-start',  flex:1}}>
                <TextComponent
                    title={title}
                    containerStyle={textContainerStyle}
                    textStyle={textStyle}
                />
            </View>
        </TouchableOpacity>
    )
}
