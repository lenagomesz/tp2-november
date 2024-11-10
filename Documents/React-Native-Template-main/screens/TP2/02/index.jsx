import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';

export default function App() {
  const imageList = [
    { id: 1, source: require('./adaptive-icon.png') },
    { id: 2, source: require('./adaptive-icon.png') },
    { id: 3, source: require('./adaptive-icon.png') },

  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal contentContainerStyle={styles.carousel}>
        {imageList.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.source} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'left',
    backgroundColor: '#fff',
    paddingTop: 0,
  },
  carousel: {
    flexDirection: 'row',
    paddingTop: 1,
    alignItems: 'top',
  },
  item: {
    width: 80,
    height: 80,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  image: {
    width: '50%',
    height: '70%',
    resizeMode: 'cover',
  },
});
