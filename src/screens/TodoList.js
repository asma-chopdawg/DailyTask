import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import CommonCard from '../components/common/CommonCard'

export default function TodoList({onEdit,onDelete,route}) {
    console.log(route.params?.tasks)
    let DATA=route.params?.tasks
    return (
        <View style={{flex:1,paddingHorizontal:10}}>
            <FlatList
                data={DATA}
                renderItem={({item,index})=>{
                return(
                <CommonCard key={index} item={item} onEdit={onEdit} onDelete={onDelete}/>
                )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
   
})
