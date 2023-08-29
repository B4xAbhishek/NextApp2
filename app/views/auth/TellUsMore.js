import React, { useState } from 'react'
import { View, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import * as Progress from 'react-native-progress';
import { RadioGroup, Radio, Button } from '@ui-kitten/components'
import { IndexPath, Layout, Select, SelectItem } from '@ui-kitten/components';

import styles from '../../constants/styles'
import { appImages } from '../../utils/images'
import { Colors } from '../../constants'
import { CONST_VALUES, strings } from '../../constants/constant'
import TextComponent from '../../utils/TextComponent';
import LinearGradientImage from '../../utils/LinearGradientImage';

export default function TellUsMore({
    navigation
}) {

    const [selectedIndex, setSelectedIndex] = useState(0)
    const [schoolSelectedIndex, setSchoolSelectedIndex] = useState(new IndexPath(0))

    return (
        <SafeAreaView style={[styles.flex1, styles.baseBg]}>
            <ScrollView style={[styles.p10, styles.mt10, styles.mb10, styles.flex1]}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={{
                        width: CONST_VALUES.WIDE * 0.1, height: CONST_VALUES.WIDE * 0.1,
                        borderRadius: CONST_VALUES.WIDE * 0.1, borderWidth: 1, borderColor: Colors.borderColor
                    }} source={appImages.backIcon} />
                </TouchableOpacity>
                <Progress.Bar
                    progress={0.3}
                    width={CONST_VALUES.WIDE * 0.8}
                    borderColor={Colors.base}
                    unfilledColor={Colors.borderColor}
                    style={{ marginTop: 20, marginBottom: 20 }}
                />
                <TextComponent title={strings.TELL_US_MORE} textStyle={{ width: CONST_VALUES.WIDE * 0.3, fontSize: 25, color: 'white' }} />
                <View style={[styles.flexRowAlignCenter, styles.width100, styles.ph10, { justifyContent: 'space-between' }]}>
                    <LinearGradientImage source={appImages.maleProfile} title={strings.PLAYER.toUpperCase()} />
                    <LinearGradientImage source={appImages.maleProfile} title={strings.COACH.toUpperCase()} />
                </View>
                <View style={[styles.p10]}>
                    <TextComponent title='GENDER' textStyle={{ color: '#75777D' }} />
                    <RadioGroup
                        selectedIndex={selectedIndex}
                        onChange={index => setSelectedIndex(index)}

                        style={{ flexDirection: 'row', alignItems: 'center', width: '50%', justifyContent: 'space-between' }}   >
                        <Radio style={styles.radio} status='primary' >
                            <TextComponent title={strings.MALE} textStyle={{ color: 'white', fontSize: 17, paddingHorizontal: 5 }} />
                        </Radio>
                        <Radio status='primary'  >
                            <TextComponent title={strings.FEMALE} textStyle={{ color: 'white', fontSize: 17, paddingHorizontal: 5 }} />
                        </Radio>
                    </RadioGroup>
                </View>
                <View style={{
                    borderRadius: 4,
                    margin: 2,
                    padding: 6,
                    backgroundColor: Colors.base,
                }}>
                    <Select
                        label={strings.SCHOOL}
                        selectedIndex={schoolSelectedIndex}
                        onSelect={index => setSchoolSelectedIndex(index)}
                        style={{ backgroundColor: Colors.base }}
                        status='control'
                    >
                        <SelectItem title='ABC School' />
                        <SelectItem title='Option 2' />
                        <SelectItem title='Option 3' />
                    </Select>
                </View>
                <View style={{
                    borderRadius: 4,
                    margin: 2,
                    padding: 6,
                    width: '50%',
                    backgroundColor: Colors.base,
                }}>
                    <Select
                        label={strings.CLASS_OF}
                        selectedIndex={schoolSelectedIndex}
                        onSelect={index => setSchoolSelectedIndex(index)}
                        style={{ backgroundColor: Colors.base }}
                        status='control'
                    >
                        <SelectItem title='2019' />
                        <SelectItem title='Option 2' />
                        <SelectItem title='Option 3' />
                    </Select>
                </View>
                <Button status='primary' style={{ borderRadius: 28, marginVertical: 2, padding: 5, justifyContent: 'center', marginHorizontal: 30 }}>
                    {strings.CONFIRM}
                </Button>
            </ScrollView>
        </SafeAreaView>
    )
}
