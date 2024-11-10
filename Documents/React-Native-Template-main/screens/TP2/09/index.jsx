import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const posts = [
  { 
    id: '1', 
    title: 'Foto na Praia', 
    summary: 'Um lindo dia na praia com sol, mar e diversão!', 
    likes: 120, 
    shares: 45, 
    content: 'Hoje foi um daqueles dias perfeitos! Fui à praia com os amigos e aproveitamos para relaxar e tirar algumas fotos incríveis. O clima estava maravilhoso e o mar calmo. Definitivamente, um dia para guardar na memória.' ,
    author: 'John Doe', 
    date: '12 de Outubro, 2024' 
  },
  { 
    id: '2', 
    title: 'Estudos de Domingo', 
    summary: 'Aproveitei o domingo para colocar os estudos em dia!', 
    likes: 200, 
    shares: 50, 
    content: 'Nada melhor do que um domingo dedicado ao estudo. Organizei meu material, fiz resumos e consegui avançar bastante nas minhas leituras. Estou me sentindo muito produtivo hoje!' ,
    author: 'Emily Johnson', 
    date: '10 de Outubro, 2024' 
  },
  { 
    id: '3', 
    title: 'Jantar de Família', 
    summary: 'Um jantar especial com a família!', 
    likes: 300, 
    shares: 120, 
    content: 'Hoje tivemos um jantar maravilhoso em família. A comida estava deliciosa e as risadas não pararam. É sempre bom passar tempo com quem amamos.' ,
    author: 'Michael Smith', 
    date: '8 de Outubro, 2024' 
  },
  { 
    id: '4', 
    title: 'Passeio ao Parque', 
    summary: 'Um passeio tranquilo ao parque para relaxar.', 
    likes: 150, 
    shares: 60, 
    content: 'Fui ao parque para aproveitar o ar fresco e dar uma caminhada. O dia estava calmo e perfeito para me reconectar com a natureza. Um ótimo momento para refletir e relaxar.' ,
    author: 'Sarah Brown', 
    date: '5 de Outubro, 2024' 
  },
  { 
    id: '5', 
    title: 'Cinema com Amigos', 
    summary: 'Uma noite divertida no cinema com os amigos!', 
    likes: 220, 
    shares: 75, 
    content: 'Fui ao cinema com meus amigos assistir ao último filme de ação. Foi uma noite divertida, com muitas risadas e bastante pipoca! Mal posso esperar para repetir a experiência.' ,
    author: 'David Williams', 
    date: '3 de Outubro, 2024' 
  },
];

export default function App() {
  const [selectedPost, setSelectedPost] = useState(null);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.summary}>{item.summary}</Text>
      <Text style={styles.info}>Curtidas: {item.likes} | Compartilhamentos: {item.shares}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setSelectedPost(item)}>
        <Text style={styles.buttonText}>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );

  if (selectedPost) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>{selectedPost.title}</Text>
        <Text style={styles.summary}>{selectedPost.summary}</Text>
        <Text style={styles.info}>Curtidas: {selectedPost.likes} | Compartilhamentos: {selectedPost.shares}</Text>
        <Text style={styles.content}>{selectedPost.content}</Text>
        <View style={styles.footer}>
          <Text style={styles.author}>Autor: {selectedPost.author}</Text>
          <Text style={styles.date}>Publicado em: {selectedPost.date}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => setSelectedPost(null)}>
          <Text style={styles.buttonText}>Voltar para a lista</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Lista de Postagens</Text>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fce4ec',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 20,
    textAlign: 'center',
    width: '100%',
  },
  listContainer: {
    width: '100%',
    paddingBottom: 20,
  },
  item: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#f8bbd0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#880e4f',
  },
  summary: {
    fontSize: 14,
    color: '#616161',
    marginVertical: 10,
  },
  info: {
    fontSize: 12,
    color: '#757575',
    marginBottom: 5,
  },
  content: {
    fontSize: 16,
    color: '#333',
    marginTop: 20,
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#f8bbd0',
    width: '100%',
    alignItems: 'center',
  },
  author: {
    fontSize: 14,
    color: '#880e4f',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#616161',
  },
  button: {
    backgroundColor: '#D81B60',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
