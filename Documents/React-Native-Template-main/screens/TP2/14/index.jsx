import React, { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const TaskItem = ({ task, onRemove }) => (
  <View style={styles.taskItem}>
    <Text style={styles.taskText}>{task}</Text>
    <TouchableOpacity onPress={onRemove}>
      <Text style={styles.removeButton}>Remover</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categorias de Tarefas</Text>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Category', { category: 'Mercado' })}>
        <Text style={styles.categoryText}>Mercado</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Category', { category: 'Farmácia' })}>
        <Text style={styles.categoryText}>Farmácia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.categoryButton} onPress={() => navigation.navigate('Category', { category: 'Estudos' })}>
        <Text style={styles.categoryText}>Estudos</Text>
      </TouchableOpacity>
    </View>
  );
};

const CategoryScreen = ({ route, navigation }) => {
  const { category } = route.params;
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    } else {
      Alert.alert('Erro', 'Digite uma tarefa');
    }
  };

  const removeTask = (taskToRemove) => {
    const filteredTasks = tasks.filter((task) => task !== taskToRemove);
    setTasks(filteredTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem task={item} onRemove={() => removeTask(item)} />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        value={taskInput}
        onChangeText={setTaskInput}
        placeholder="Nova Tarefa"
      />
      <Button title="Adicionar Tarefa" onPress={addTask} />
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
    borderRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 5,
    width: '100%',
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
  removeButton: {
    color: 'red',
  },
});

export default App;
