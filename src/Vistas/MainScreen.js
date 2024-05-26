// src/Vistas/MainScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AgregarTarea from '../components/AgregarTarea';

const MainScreen = () => {
    const tareas = useSelector(state => state.tareas.tareas);

    return (
        <View>
            <Text>Gestor de Tareas</Text>
            <AgregarTarea />
            {tareas.map(tarea => (
                <Text key={tarea.id}>{tarea.nombre}</Text>
            ))}
        </View>
    );
};

export default MainScreen;
