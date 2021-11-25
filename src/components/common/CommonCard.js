import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function CommonCard({item,onEdit,onDelete}) {
    return (
        <View style={styles.card}>
        <View style={{flex:0.1,justifyContent:'center',alignItems:'center'}}>
            <MaterialCommunityIcons name={'note-text-outline'} size={20}/>
        </View>
        <View style={{flex:0.7,justifyContent:'center',paddingLeft:10}}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
        </View>
        <View style={{flex:0.2,flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
            <TouchableOpacity onPress={onEdit}>
                <MaterialCommunityIcons name={'circle-edit-outline'} size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onDelete}>
                <MaterialCommunityIcons name={'delete-empty-outline'} size={20} />
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    card:{
        height:hp('8%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderRadius:3
    },
    title:{
        fontSize:15,
        fontWeight:'500'
    }
})
