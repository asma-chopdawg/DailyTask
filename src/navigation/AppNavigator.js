import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTodo from '../screens/CreateTodo';
import TodoList from '../screens/TodoList';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
        <Stack.Screen name="DisplayTodo" component={TodoList}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;




 
// const editTask=(index)=>{
  // console.log(index)
  // let temp = [ ...tasks ];
  // let filteredArray = tasks.filter(item => temp.indexOf(item)==index)
  // console.log(filteredArray)
  // temp[index] = {...markers[index], key: value};
  // setTasks(temp)
// }