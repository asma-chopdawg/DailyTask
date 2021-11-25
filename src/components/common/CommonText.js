import React from 'react'
import { StyleSheet, Text,Dimensions } from 'react-native'
import { COLORS } from '../../res/Constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CommonText = ({title,customStyle}) => {
    return (
        <Text style={[styles.titleContainer,customStyle]}>{title}</Text>
    )
}

export default CommonText

const styles = StyleSheet.create({
    titleContainer:{
        color:COLORS.primary 
    }
})
