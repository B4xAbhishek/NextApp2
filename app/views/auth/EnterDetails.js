import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView, Text } from 'react-native'
import * as Progress from 'react-native-progress';
import { Button } from '@ui-kitten/components'
import { IndexPath, Input, Select, SelectItem } from '@ui-kitten/components';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'

import styles from '../../constants/styles'
import { appImages } from '../../utils/images'
import { Colors } from '../../constants'
import { CONST_VALUES, strings } from '../../constants/constant'
import TextComponent from '../../utils/TextComponent';

export default function EnterDetails({
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

    return (
        <SafeAreaView style={[styles.flex1, styles.baseBg]}>
            <ScrollView style={[styles.p10, styles.mt10, styles.mb10, styles.flex1]} contentContainerStyle={{ flex: 1, padding: 10, justifyContent: 'space-between', flexDirection: 'column' }}>
                <View>
                    <View style={[styles.flexRowAlignCenter, styles.mb15]}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Image style={{
                                width: CONST_VALUES.WIDE * 0.1, height: CONST_VALUES.WIDE * 0.1,
                                borderRadius: 10,
                                padding: 10
                            }} source={appImages.backIcon} />
                        </TouchableOpacity>
                        <TextComponent title={strings.ENTER_PLAYER_DETAILS} textStyle={{ color: 'white', fontSize: 20, paddingHorizontal: 20 }} />
                    </View>
                    <Progress.Bar
                        progress={0.3}
                        width={CONST_VALUES.WIDE * 0.8}
                        borderColor={Colors.base}
                        unfilledColor={Colors.borderColor}
                        style={{ marginTop: 20, marginBottom: 20 }}
                    />
                    <View style={[styles.flexRowAlignCenter, { justifyContent: 'space-between' }]}>
                        <Input
                            value={firstName}
                            placeholder={strings.FIRST_NAME}
                            onChangeText={text => setFirstName(text)}
                            style={{ paddingHorizontal: 2, borderRadius: 5, borderWidth: 1, borderColor: '#4f5156' }}
                        />
                        <Input
                            value={lastName}
                            placeholder={strings.LAST_NAME}
                            accessoryRight={renderIcon}
                            onChangeText={text => setLastName(text)}
                            style={{ paddingHorizontal: 2, borderRadius: 5, borderWidth: 1, borderColor: '#4f5156' }}
                        />
                    </View>
                    <View style={{ marginTop: 20 }}>
                        <Text style={{  color: Colors.borderColor, fontSize: 12 }}>{strings.DATE_OF_BIRTH}</Text>
                        <TouchableOpacity style={{
                            marginTop: 15, borderBottomWidth: 1.5,
                            borderBottomColor: Colors.borderColor,
                        }} onPress={() => {
                            // this.setState({ isDatePickerVisible: true })
                        }}>
                            <Text style={{
                                paddingVertical: 10, color: dob === 'SELECT DATE' ? Colors.borderColor : Colors.light, fontSize: 16
                            }}>{dob === 'SELECT DATE' ? dob : moment(dob).format('DD MMM YYYY')}</Text>
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={false}
                        mode="date"

                        maximumDate={moment.now()}
                    />
                    <View style={[styles.flexRowAlignCenter, styles.flex1, { justifyContent: 'space-between', paddingVertical: 20 }]}>
                        <Select
                            label={strings.CITY}
                            selectedIndex={stateSelectedIndex}
                            onSelect={index => setStateSelectedIndex(index)}
                            style={{ backgroundColor: Colors.base, flex: 1, marginHorizontal: 5,fontSize:10, color:'white' }}
                            status='control'
                        >
                            <SelectItem title='NY' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                            label={strings.STATE}
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
                    <View style={[styles.flexRowAlignCenter, styles.flex1, { justifyContent: 'space-between', paddingVertical: 20 }]}>
                        <Select
                            label={strings.HEIGHT}
                            selectedIndex={heightSelectedIndex}
                            onSelect={index => setHeightSelectedIndex(index)}
                            style={{ backgroundColor: Colors.base, flex: 1, marginHorizontal: 5 }}
                            status='control'
                        >
                            <SelectItem title='NY' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                        <Select
                            label={strings.WEIGHT}
                            selectedIndex={weightSelectedIndex}
                            onSelect={index => setWeightSelectedIndex(index)}
                            style={{ backgroundColor: Colors.base, flex: 1, marginHorizontal: 5 }}
                            status='control'
                        >
                            <SelectItem title='New York' />
                            <SelectItem title='Option 2' />
                            <SelectItem title='Option 3' />
                        </Select>
                    </View>
                </View>
                <View>
                    <Button status='primary' style={{ borderRadius: 28, marginVertical: 2, padding: 5, justifyContent: 'center', marginHorizontal: 30 }}>
                        {strings.CONFIRM}
                    </Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
