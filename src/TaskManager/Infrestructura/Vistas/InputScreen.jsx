import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';

const InputScreen = ({ route, navigation, addTask, editTask }) => {
  const [task, setTask] = useState({ id: null, name: '' });

  useEffect(() => {
    if (route.params?.task) {
      setTask(route.params.task);
    }
  }, [route.params?.task]);

  const handleSave = () => {
    if (task.id) {
      editTask(task.id, task);
    } else {
      addTask({ ...task, id: Date.now() });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Agregar Actividad"
        value={task.name}
        onChangeText={(name) => setTask({ ...task, name })}
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', // Cambia el color de fondo aquí
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
});

export default InputScreen;
