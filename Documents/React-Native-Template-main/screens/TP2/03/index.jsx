import React from 'react';
import { ScrollView, View, Image, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const imageList = [
    { id: 1, source: require('./adaptive-icon.png') },
    { id: 2, source: require('./adaptive-icon.png') },
    { id: 3, source: require('./adaptive-icon.png') },
    { id: 4, source: require('./adaptive-icon.png') },
    { id: 5, source: require('./adaptive-icon.png') },
    { id: 6, source: require('./adaptive-icon.png') },
  ];

  const screenWidth = Dimensions.get('window').width;

  const renderItem = (item) => (
    <View key={item.id} style={styles.item}>
      <Image source={item.source} style={styles.image} />
    </View>
  );

  const renderRows = () => {
    let rows = [];
    let row = [];

    imageList.forEach((item, index) => {
      row.push(renderItem(item));

   
      if ((index + 1) % 3 === 0 || index === imageList.length - 1) {
        rows.push(
          <View key={rows.length} style={styles.row}>
            {row}
          </View>
        );
        row = []; 
      }
    });

    return rows;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderRows()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    width: (Dimensions.get('window').width - 40) / 3, 
    height: 100,
    backgroundColor: '#ccc',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});
