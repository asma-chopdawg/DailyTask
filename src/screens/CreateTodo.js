import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import CommonButton from '../components/common/CommonButton'
import CommonInput from '../components/common/CommonInput'
import CommonText from '../components/common/CommonText'
import { AddTodo, EditTodo } from '../store/actions/todoActions'
import {useRoute} from '@react-navigation/native'

const InitialStateData = {
    title:'',
    description:''
  };
let index;
const CreateTodo = ({navigation}) => {
    const dispatch = useDispatch() 
    const DATA = useSelector(state => state.todo.tasks);
    const route = useRoute();
    const [isEditMode, setIsEditMode] = useState(false)
 
    const [tasks, setTasks] = useState({...InitialStateData})
    const onSelect = data => {
        console.log(onSe)
      };
    React.useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
            console.log("object***",route)
            index=route.params?.index
            if(route.params!==undefined){
                setIsEditMode(true)
                setTasks(prevState => ({
                    ...prevState,
                    ['title']: route?.params?.item?.title,
                    ['description']: route?.params?.item?.description,
                }));
            }
            
        });
        return unsubscribe;
      }, [route]);

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
            }
            else{ 
                const obj={
                    title:tasks.title,
                    description:tasks.description,
                }
                let temp=[...DATA]
                temp[index]=obj
                dispatch(EditTodo(temp))    
            }
            resetData()
            navigation.navigate("DisplayTodo")
       }catch(err){
           console.log(err)
       }
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
                <CommonButton buttonText={isEditMode ?'Update':'Save' } onPress={
                     isEditMode
                     ? () => addTask('Update')
                     : () => addTask('Save')

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
