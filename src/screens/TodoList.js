import React from 'react'
import { FlatList, StyleSheet, Text, View,Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux'
import CommonCard from '../components/common/CommonCard'
import CommonHeader from '../components/common/CommonHeader';
import { RemoveTodo } from '../store/actions/todoActions';

export default function TodoList({navigation}) {

    const DATA = useSelector(state => state.todo.tasks);
    const dispatch = useDispatch()

    const onEdit=(item,index)=>{
        navigation.navigate('CreateTodo',{
            item:item,
            index:index
        })
    }
   
    return (
        <View style={{flex:1,paddingHorizontal:10}}>
            <CommonHeader onPress={()=>navigation.goBack('CreateTodo',{
            item:null,
            index:null
        })}/>
           { 
           DATA.length>0 ?
            <FlatList
                data={DATA}
                renderItem={({item,index})=>{
                return(
                    <CommonCard key={index} item={item} onEdit={()=>onEdit(item,index)} onDelete={()=>dispatch(RemoveTodo(index))}/>
                )
                }}
                keyExtractor={index => index}
            />
        :
        <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
            <Text>{'Please enter notes'}</Text>
        </View>
        }
        </View>
    )
}

const styles = StyleSheet.create({
   
})
