import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp} from 'react-native-responsive-screen'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CommonHeader({onPress}) {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={{flex:0.1}} onPress={onPress}>
                <Ionicons name={'chevron-back'} size={25}/>
            </TouchableOpacity>
            <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',fontSize:25}}>Tasks</Text>
            </View>
            <View style={{flex:0.1}}></View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height:hp('9%'),
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'flex-end'
    }
})
