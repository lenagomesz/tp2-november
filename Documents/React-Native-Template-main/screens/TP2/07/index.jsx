import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';

const tarefas = [
  { id: 1, tarefa: 'Comprar alimentos no mercadinho' },
  { id: 2, tarefa: 'Lavar a roupa na máquina' },
  { id: 3, tarefa: 'Estudar React Native para TP' },
  { id: 4, tarefa: 'Ir à academia' },
  { id: 5, tarefa: 'Limpar a casa' },
  { id: 6, tarefa: 'Preparar o jantar' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.lista}>
        {tarefas.map((item) => (
          <View key={item.id} style={styles.item}>
            <Text style={styles.texto}>{item.tarefa}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  lista: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  item: {
    width: (Dimensions.get('window').width * 0.8),
    backgroundColor: '#ffc0cb',
    marginBottom: 15,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});
