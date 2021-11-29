import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS } from '../../res/Constants'

export default function CommonCard({item,onEdit,onDelete}) {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
            <View style={styles.cardIcons}>
                <TouchableOpacity onPress={onEdit}>
                    <MaterialCommunityIcons name={'circle-edit-outline'} size={20} color={COLORS.grey}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialCommunityIcons name={'delete-empty-outline'} size={20} color={COLORS.grey}/>
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
        borderRadius:3,
        marginVertical:5
    },
    cardContent:{
        flex:0.8,
        justifyContent:'center',
        paddingLeft:10,
        
    },
    cardIcons:{
        flex:0.2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    title:{
        fontSize:15,
        fontWeight:'500',
        color:COLORS.black
    },
    description:{
        marginTop:5,
        color:COLORS.grey
    }
})
