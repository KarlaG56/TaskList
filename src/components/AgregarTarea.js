// src/components/AgregarTarea.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { agregarTarea } from '../store/actions';
import { View, TextInput, Button } from 'react-native';

const AgregarTarea = () => {
    const [tarea, setTarea] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if (tarea.trim() === '') return;

        dispatch(agregarTarea({ id: Date.now(), nombre: tarea }));
        setTarea('');
    };

    return (
        <View>
            <TextInput
                value={tarea}
                onChangeText={setTarea}
                placeholder="Nueva tarea"
            />
            <Button title="Agregar Tarea" onPress={handleSubmit} />
        </View>
    );
};

export default AgregarTarea;
