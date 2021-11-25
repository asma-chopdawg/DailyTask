import React, { useState } from 'react'
import { FlatList, SafeAreaView,  ScrollView,  StyleSheet, View } from 'react-native'
import CommonButton from '../components/common/CommonButton'
import CommonCard from '../components/common/CommonCard'
import CommonInput from '../components/common/CommonInput'
import CommonText from '../components/common/CommonText'

const CreateTodo = ({navigation}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])

    const addTask=()=>{
        let temp=[...tasks]
        const obj={
            title:title,
            description:description,
        }
        temp.push(obj)
        setTasks(temp)
        setTitle('')
        setDescription('')
    //    setTasks([...tasks,obj]) 
    //    navigation.navigate("DisplayTodo",{
    //        tasks:tasks
    //    })
    }
    const removeTask=(index)=>{
        console.log(index)
        let filteredArray =tasks.filter(item => tasks.indexOf(item)!==index)
        setTasks(filteredArray)
    }
    
    return (
        <View style={styles.container}>
            <View style={{flex:0.1,marginTop:10}}>
                <CommonText title={'Todo Task'} customStyle={styles.title}/>
            </View>
            <View style={{flex:0.9}}>
                <CommonInput placeholder={"Enter Title"} onChangeText={(e)=>setTitle(e)} value={title}/>
                <CommonInput placeholder={"Enter Description"} onChangeText={(e)=>setDescription(e)} value={description}/>
                <CommonButton buttonText={"Add Task"} onPress={addTask}/>
            </View>
            <View style={{flex:1}}>
            {
                <FlatList
                    data={tasks}
                    renderItem={({item,index})=>{
                    return(
                        <CommonCard key={index} item={item} onDelete={()=>removeTask(index)} onEdit={()=>editTask()}/>
                    )
                    }}
                    keyExtractor={item => item.id}
                />
            }
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
