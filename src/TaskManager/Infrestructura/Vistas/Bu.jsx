import React from 'react';
import { Button, View, Alert } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title="Presiona aquí"
        onPress={() => Alert.alert('Agregar tarea')}
      />
    </View>
  );
};

export default App;
