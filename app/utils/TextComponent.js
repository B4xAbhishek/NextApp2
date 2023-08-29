import React from 'react'
import { Text } from 'react-native'


export default function TextComponent({
    ellipsizeMode = 'tail',
    allowFontScaling = false,
    numberOfLines,
    textStyle,
    title = '',
    adjustsFontSizeToFit = false
}) {
    return (
        <Text
            allowFontScaling={allowFontScaling}
            ellipsizeMode={ellipsizeMode}
            numberOfLines={numberOfLines}
            adjustsFontSizeToFit={adjustsFontSizeToFit}
            style={textStyle}
        >
            {title}
        </Text>
    )
}
