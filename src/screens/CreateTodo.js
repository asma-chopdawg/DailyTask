import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import CommonText from '../components/common/CommonText'
import { AddTodo } from '../store/actions/todoActions'
import {useRoute} from '@react-navigation/native'
const CreateTodo = ({navigation}) => {
    const route = useRoute();
    const isEditMode = route.params ? true : false;
    console.log(isEditMode)
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask=()=>{
        const obj={
            title:title,
            description:description,
        }
        dispatch(AddTodo(obj))
        setTitle('')
        setDescription('')
        navigation.navigate("DisplayTodo")

    }
   
    const editTask=(index)=>{
        console.log(index)
        let temp = [ ...tasks ];
        let filteredArray = tasks.filter(item => temp.indexOf(item)==index)
        console.log(filteredArray)
// temp[index] = {...markers[index], key: value};
        // setTasks(temp)
    }
    return (
        <View style={styles.container}>
            <View style={{flex:0.1,marginTop:10}}>
                <CommonText title={'Todo Task'} customStyle={styles.title}/>
            </View>
            <View style={{flex:0.9}}>
                <CommonInput placeholder={"Enter Title"} onChangeText={(e)=>setTitle(e)} value={title}/>
                <CommonInput placeholder={"Enter Description"} onChangeText={(e)=>setDescription(e)} value={description}/>
                <CommonButton buttonText={!isEditMode ? 'Save' : 'Update'} onPress={
                     !isEditMode
                     ? () => addTask('save')
                     : () => addTask('update')
                }/>
            </View>
        </View>
    )
}

export default CreateTodo

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20
    },
    title:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'700',
    }
})
