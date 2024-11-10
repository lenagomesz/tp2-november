import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const items = [
  { id: '1', title: 'Avengers: Endgame' },
  { id: '2', title: 'Avengers: Infinity War' },
  { id: '3', title: 'The Avengers' },
  { id: '4', title: 'Avengers: Age of Ultron' },
  { id: '5', title: 'Avengers: Civil War' },
];

const users = [
  { id: 'user1', name: 'Alice', preferences: ['1', '2', '4'] },
  { id: 'user2', name: 'Bob', preferences: ['2', '3', '5'] },
  { id: 'user3', name: 'Charlie', preferences: ['1', '3', '5'] },
  { id: 'user4', name: 'Dave', preferences: ['4', '5'] },
];

function calculateAffinity(userPreferences, currentUserPreferences) {
  const sharedLikes = userPreferences.filter(item => currentUserPreferences.includes(item)).length;
  const totalItems = new Set([...userPreferences, ...currentUserPreferences]).size;
  return (sharedLikes / totalItems) * 100;
}

function HomeScreen({ navigation }) {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [userPreferences, setUserPreferences] = useState([]);
  
  const currentItem = items[currentItemIndex];

  const handleLike = (itemId) => {
    setUserPreferences([...userPreferences, itemId]);
    if (currentItemIndex < items.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };

  const handleDislike = () => {
    if (currentItemIndex < items.length - 1) {
      setCurrentItemIndex(currentItemIndex + 1);
    }
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Você gosta de:</Text>
      <Text style={styles.itemTitle}>{currentItem.title}</Text>
      <View style={styles.buttons}>
        <Button title="Sim" onPress={() => handleLike(currentItem.id)} />
        <Button title="Não" onPress={handleDislike} />
      </View>
      {currentItemIndex === items.length && (
        <TouchableOpacity onPress={() => navigation.navigate('AffinityScreen', { userPreferences })}>
          <Text style={styles.affinityLink}>Ver usuários com gostos parecidos</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

function AffinityScreen({ route }) {
  const { userPreferences } = route.params;

  const affinityList = users.map(user => ({
    ...user,
    affinity: calculateAffinity(user.preferences, userPreferences),
  })).sort((a, b) => b.affinity - a.affinity);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Usuários com gostos semelhantes</Text>
      <FlatList
        data={affinityList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.affinityItem}>
            <Text>{item.name} - Afinidade: {item.affinity.toFixed(2)}%</Text>
          </View>
        )}
      />
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AffinityScreen" component={AffinityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  itemTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  affinityLink: {
    marginTop: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  affinityItem: {
    marginVertical: 10,
  }
});
