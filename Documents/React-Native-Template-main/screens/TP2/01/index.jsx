import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function App() {

  const musicList = [
    "Beggin'", 
    "I Wanna Be Your Slave", 
    "Mammamia", 
    "Supermodel", 
    "Torna a Casa", 
    "Zitti e Buoni"
  ];

  const renderMusicItem = (title, index) => (
    <View key={index} style={styles.item}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.list}>
        {musicList.map((music, index) => renderMusicItem(music, index))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  list: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingBottom: 20,
  },
  item: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    width: '100%', 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
