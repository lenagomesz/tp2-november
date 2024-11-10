import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Perfil</Text>
      <Text>Nome: Lira Trunexa</Text>
      <Text>Email: lira@viagens.com</Text>
    </View>
  );
}

function FriendsScreen() {
  const friends = [
    { id: '1', name: 'Zorath Illena' },
    { id: '2', name: 'Caelia Virdruna' },
    { id: '3', name: 'Brinus Damel' },
    { id: '4', name: 'Suri Valdir' },
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Amigos</Text>
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Configurações</Text>
      <Button title="Alterar Senha" onPress={() => alert("Senha alterada")} />
    </View>
  );
}

// Feed de postagens
function FeedScreen({ navigation }) {
  const posts = [
    { id: '1', destination: 'Paris', startDate: '2023-10-10', endDate: '2023-10-20', rating: 5, user: 'Zorath Illena' },
    { id: '2', destination: 'Tokyo', startDate: '2023-09-01', endDate: '2023-09-10', rating: 4, user: 'Caelia Virdruna' },
    { id: '3', destination: 'New York', startDate: '2023-08-15', endDate: '2023-08-22', rating: 3, user: 'Brinus Damel' },
  ];

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Feed de Viagens</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.postItem}
            onPress={() => navigation.navigate('PostDetails', { post: item })}
          >
            <Text style={styles.postTitle}>{item.destination}</Text>
            <Text>Data: {item.startDate} - {item.endDate}</Text>
            <Text>Avaliação: {item.rating} estrelas</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// Detalhes do Post
function PostDetailsScreen({ route }) {
  const { post } = route.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{post.destination}</Text>
      <Text>Início: {post.startDate}</Text>
      <Text>Fim: {post.endDate}</Text>
      <Text>Avaliação: {post.rating} estrelas</Text>
      <Text>Usuário: {post.user}</Text>
      <Button title="Curtir" onPress={() => alert('Post curtido!')} />
    </View>
  );
}

// Menu Drawer
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Feed">
        <Drawer.Screen name="Feed" component={FeedScreen} />
        <Drawer.Screen name="Perfil" component={ProfileScreen} />
        <Drawer.Screen name="Amigos" component={FriendsScreen} />
        <Drawer.Screen name="Configurações" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

// Stack de navegação para detalhes do post
function PostStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreen} />
      <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8e6f7',
    padding: 10,
  },
  title: {
    fontSize: 24,
    color: '#9b3d61',
    marginBottom: 20,
  },
  item: {
    fontSize: 18,
    color: '#7a2e4d',
    padding: 10,
  },
  postItem: {
    backgroundColor: '#fce4e1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    width: '100%',
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#d05a7e',
  },
});

export default App;
