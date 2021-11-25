import React from 'react'
import { StyleSheet,  TextInput } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS } from '../../res/Constants'

const CommonInput = ({placeholder,value,onChangeText,customStyle}) => {
    return (
        <TextInput placeholder={placeholder} value={value} onChangeText={onChangeText} style={[styles.inputStyle,customStyle]}/>
    )
}

export default CommonInput

const styles = StyleSheet.create({
    inputStyle:{
       height:hp('5%'),
       borderBottomWidth:0.7,
       borderWidth:1,
       borderColor:COLORS.grey,
       borderRadius:5,
       paddingLeft:hp('0.6%'),
       marginVertical:4
    }
})
