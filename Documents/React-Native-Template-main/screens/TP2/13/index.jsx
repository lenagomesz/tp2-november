import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const questions = [
  {
    question: 'Qual a capital do Brasil?',
    options: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'],
    answer: 'Brasília',
  },
  {
    question: 'Quem é o presidente dos Estados Unidos?',
    options: ['Donald Trump', 'Joe Biden', 'Barack Obama', 'George Bush'],
    answer: 'Joe Biden',
  },
  {
    question: 'Qual a fórmula da água?',
    options: ['H2O', 'CO2', 'O2', 'H2O2'],
    answer: 'H2O',
  },
  {
    question: 'Quantos continentes existem?',
    options: ['5', '6', '7', '8'],
    answer: '7',
  },
  {
    question: 'Em que ano o Brasil foi descoberto?',
    options: ['1500', '1492', '1600', '1800'],
    answer: '1500',
  },
  {
    question: 'Quem pintou a Mona Lisa?',
    options: ['Van Gogh', 'Picasso', 'Da Vinci', 'Rembrandt'],
    answer: 'Da Vinci',
  },
  {
    question: 'Qual é o maior planeta do Sistema Solar?',
    options: ['Terra', 'Júpiter', 'Marte', 'Saturno'],
    answer: 'Júpiter',
  },
  {
    question: 'O que é a fotossíntese?',
    options: ['Produção de alimentos pelos animais', 'Produção de energia solar', 'Processo de plantas converterem luz em energia', 'Queima de combustíveis'],
    answer: 'Processo de plantas converterem luz em energia',
  },
  {
    question: 'Quem escreveu "Dom Casmurro"?',
    options: ['Machado de Assis', 'José de Alencar', 'Clarice Lispector', 'Monteiro Lobato'],
    answer: 'Machado de Assis',
  },
  {
    question: 'Qual é o maior oceano do planeta?',
    options: ['Atlântico', 'Índico', 'Pacífico', 'Ártico'],
    answer: 'Pacífico',
  },
];

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Bem-vindo ao Quiz!</Text>
    <Button
      title="Iniciar Quiz"
      onPress={() => navigation.navigate('Question', { questionIndex: 0, score: 0 })}
    />
  </View>
);

const QuestionScreen = ({ route, navigation }) => {
  const { questionIndex, score } = route.params;
  const currentQuestion = questions[questionIndex];
  
  const handleAnswer = (answer) => {
    const newScore = answer === currentQuestion.answer ? score + 1 : score;
    if (questionIndex + 1 < questions.length) {
      navigation.push('Question', { questionIndex: questionIndex + 1, score: newScore });
    } else {
      navigation.navigate('Result', { score: newScore });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{currentQuestion.question}</Text>
      {currentQuestion.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.button}
          onPress={() => handleAnswer(option)}
        >
          <Text style={styles.buttonText}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const ResultScreen = ({ route }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.result}>Sua pontuação: {score} de 10</Text>
      <Button title="Reiniciar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 10,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default App;
