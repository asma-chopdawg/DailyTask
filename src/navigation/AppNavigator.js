import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTodo from '../screens/CreateTodo';
import TodoList from '../screens/TodoList';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CreateTodo" component={CreateTodo} />
        <Stack.Screen name="DisplayTodo" component={TodoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;