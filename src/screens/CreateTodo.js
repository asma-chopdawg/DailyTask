import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import CommonText from '../components/common/CommonText'
import { AddTodo } from '../store/actions/todoActions'
import {useRoute} from '@react-navigation/native'

const InitialStateData = {
    title:'',
    description:''
  };

const CreateTodo = ({navigation}) => {
    const dispatch = useDispatch() 
    const DATA = useSelector(state => state.todo.tasks);
    const route = useRoute();
    const isEditMode = route.params ? true : false;
    const [tasks, setTasks] = useState(
        !isEditMode ? InitialStateData : route.params?.item,
    )

    const resetData = () => {
        setTasks({
            title:'',
            description:''
        });
    };
    
    const handleInputChange = (key, value) => {
        setTasks(prevState => ({
          ...prevState,
          [key]: value,
        }));
    };
    
    const addTask=async (action)=>{
       try{
        if(action==='Save'){
            const obj={
                title:tasks.title,
                description:tasks.description,
            }
            dispatch(AddTodo(obj))
            }else{  
                let temp=[...DATA]
                let index=route?.params?.index
                temp[index]={...DATA,tasks}
                console.log(temp)
            }
            resetData()
            navigation.navigate("DisplayTodo")
       }catch(err){
           console.log(err)
       }
    }
   
    const editTask=(index)=>{
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
                <CommonInput 
                    placeholder={"Enter Title"} 
                    value={tasks.title}
                    onChangeText={(text)=>handleInputChange('title',text)} 
                />
                <CommonInput 
                    placeholder={"Enter Description"}
                    value={tasks.description}
                    onChangeText={(text)=>handleInputChange('description',text)} 
                    />
                <CommonButton buttonText={!isEditMode ? 'Save' : 'Update'} onPress={
                     !isEditMode
                     ? () => addTask('Save')
                     : () => addTask('Update')
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
