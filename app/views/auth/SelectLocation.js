import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import { IndexPath, Layout, Select, SelectItem, Input } from '@ui-kitten/components';

import styles from '../../constants/styles'
import { appImages } from '../../utils/images'
import { Colors } from '../../constants'
import { CONST_VALUES, strings } from '../../constants/constant'
import TextComponent from '../../utils/TextComponent';

export default function SelectLocation({
    navigation
}) {

    const [searchSchool, setSearchSchool] = useState('')
    const [stateSelectedIndex, setStateSelectedIndex] = useState(new IndexPath(0))
    const [citySelectedIndex, setCitySelectedIndex] = useState(new IndexPath(0))

    const renderIcon = () => {

    }

    return (
        <SafeAreaView style={[styles.flex1, styles.baseBg, styles.p10]}>
            <ScrollView style={[styles.p10, styles.mt10, styles.mb10, styles.flex1]}>
                <View style={[styles.flexRowAlignCenter, styles.mb15]}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={{
                            width: CONST_VALUES.WIDE * 0.1, height: CONST_VALUES.WIDE * 0.1,
                            borderRadius: 10,
                            padding: 10
                        }} source={appImages.backIcon} />
                    </TouchableOpacity>
                    <TextComponent title={strings.SEARCH_SCHOOL} textStyle={{ color: 'white', fontSize: 20, paddingHorizontal: 20 }} />
                </View>
                <Input
                    value={searchSchool}
                    placeholder={strings.SEARCH_SCHOOL}
                    accessoryRight={renderIcon}
                    onChangeText={text => setSearchSchool(text)}
                    style={{ backgroundColor: '#181A20', borderRadius: 5, borderWidth: 1, borderColor: '#4f5156' }}
                />
                <View style={[styles.flexRowAlignCenter, styles.flex1, { justifyContent: 'space-between', paddingVertical: 20 }]}>
                    <Select
                        label={strings.STATE}
                        selectedIndex={stateSelectedIndex}
                        onSelect={index => setStateSelectedIndex(index)}
                        style={{ backgroundColor: Colors.base, flex: 1, marginHorizontal: 5 }}
                        status='control'
                    >
                        <SelectItem title='NY' />
                        <SelectItem title='Option 2' />
                        <SelectItem title='Option 3' />
                    </Select>
                    <Select
                        label={strings.CITY}
                        selectedIndex={citySelectedIndex}
                        onSelect={index => setCitySelectedIndex(index)}
                        style={{ backgroundColor: Colors.base, flex: 1, marginHorizontal: 5 }}
                        status='control'
                    >
                        <SelectItem title='New York' />
                        <SelectItem title='Option 2' />
                        <SelectItem title='Option 3' />
                    </Select>
                </View>
                <TextComponent title={searchSchool} textStyle={{ color: 'white', fontSize: 18 }} />
            </ScrollView>
        </SafeAreaView>
    )
}
