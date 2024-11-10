import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const contatos = [
  {
    id: '1',
    nome: 'Pietro Sampaio',
    endereco: 'Rua Amora, 13',
    numero: '(11) 98765-4321',
    avatar: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    id: '2',
    nome: 'Helena Gonzalez',
    endereco: 'Rua Bolacha, 56',
    numero: '(11) 91234-5678',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: '3',
    nome: 'Enzo Macciato',
    endereco: 'Rua Cookie, 96',
    numero: '(37) 93456-7890',
    avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
  {
    id: '4',
    nome: 'Luiza China',
    endereco: 'Rua Dado, 101',
    numero: '(47) 99876-5432',
    avatar: 'https://randomuser.me/api/portraits/women/20.jpg',
  },
];

const ItemContato = ({ nome, endereco, numero, avatar }) => (
  <View style={styles.item}>
    <Image source={{ uri: avatar }} style={styles.avatar} />
    <View style={styles.info}>
      <Text style={styles.nome}>{nome}</Text>
      <Text style={styles.endereco}>{endereco}</Text>
      <Text style={styles.numero}>{numero}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contatos}
        renderItem={({ item }) => (
          <ItemContato
            nome={item.nome}
            endereco={item.endereco}
            numero={item.numero}
            avatar={item.avatar}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  endereco: {
    fontSize: 14,
    color: '#555',
  },
  numero: {
    fontSize: 14,
    color: '#333',
  },
});
