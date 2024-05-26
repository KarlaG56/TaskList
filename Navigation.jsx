import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/TaskManager/Infrestructura/Vistas/HomeScreen';
import InputScreen from './src/TaskManager/Infrestructura/Vistas/InputScreen';

const Stack = createStackNavigator();

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id, newTask) => {
    setTasks(tasks.map(task => (task.id === id ? newTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Actividades">
        <Stack.Screen name="Actividades">
          {props => <HomeScreen {...props} tasks={tasks} deleteTask={deleteTask} />}
        </Stack.Screen>
        <Stack.Screen name="Nueva actividad">
          {props => <InputScreen {...props} addTask={addTask} editTask={editTask} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
