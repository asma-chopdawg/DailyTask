import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { COLORS } from '../../res/Constants'

const CommonButton = ({customStyle,buttonText,onPress}) => {
    return (
        <TouchableOpacity style={[styles.btnStyle,customStyle]} onPress={onPress}>
            <Text style={styles.btnText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton

const styles = StyleSheet.create({
    btnStyle:{
        height:hp('5.2%'),
        borderWidth:0.6,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        backgroundColor:COLORS.primary,
        marginVertical:7
    },
    btnText:{
        color:COLORS.white,
        fontWeight:'600',
        fontSize:16
    }
})
