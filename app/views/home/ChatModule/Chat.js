import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class Chat extends Component {
    render() {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}> textInComponent </Text>
            </View>
        )
    }
}
