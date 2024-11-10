import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PersonalInfo = () => (
  <ScrollView style={styles.section}>
    <View style={styles.profileContainer}>
   
      <Image 
        source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}} 
        style={styles.profileImage} 
      />
      <Text style={styles.title}>Informações Pessoais</Text>
      <Text style={styles.text}>Nome: Helena Gomes</Text>
      <Text style={styles.text}>Idade: 28 anos</Text>
      <Text style={styles.text}>Email: helena.gomes@email.com</Text>
      <Text style={styles.text}>Telefone: +55 11 91234-5678</Text>
      <Text style={styles.text}>Localização: São Paulo, SP</Text>
    </View>
  </ScrollView>
);

const Experience = () => (
  <ScrollView style={styles.section}>
    <Text style={styles.title}>Experiência Profissional</Text>
    <Text style={styles.text}>- QA Analyst na Empresa X (2020 - Presente)</Text>
    <Text style={styles.text}>- Estagiária de Testes na Empresa Y (2018 - 2020)</Text>
    <Text style={styles.text}>- Freelancer QA (2017 - 2018)</Text>
  </ScrollView>
);

const Education = () => (
  <ScrollView style={styles.section}>
    <Text style={styles.title}>Formação Acadêmica</Text>
    <Text style={styles.text}>- Bacharel em Sistemas de Informação - Universidade ABC (2015 - 2019)</Text>
    <Text style={styles.text}>- Curso de Qualidade de Software (2019)</Text>
  </ScrollView>
);

const Languages = () => (
  <ScrollView style={styles.section}>
    <Text style={styles.title}>Idiomas</Text>
    <Text style={styles.text}>- Português: Nativo</Text>
    <Text style={styles.text}>- Inglês: Fluente</Text>
    <Text style={styles.text}>- Espanhol: Intermediário</Text>
  </ScrollView>
);

const SoftSkills = () => (
  <ScrollView style={styles.section}>
    <Text style={styles.title}>Soft Skills</Text>
    <Text style={styles.text}>- Comunicação eficaz</Text>
    <Text style={styles.text}>- Trabalho em equipe</Text>
    <Text style={styles.text}>- Gestão de tempo</Text>
    <Text style={styles.text}>- Resolução de problemas</Text>
    <Text style={styles.text}>- Adaptação a mudanças</Text>
  </ScrollView>
);

export default function App() {
  const [selectedTab, setSelectedTab] = useState('pessoal');

  const renderContent = () => {
    switch (selectedTab) {
      case 'pessoal':
        return <PersonalInfo />;
      case 'experiencia':
        return <Experience />;
      case 'educacao':
        return <Education />;
      case 'idiomas':
        return <Languages />;
      case 'softskills':
        return <SoftSkills />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <View style={styles.container}>
      {renderContent()}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => setSelectedTab('pessoal')} style={styles.navItem}>
          <Ionicons name="person" size={24} color={selectedTab === 'pessoal' ? '#D81B60' : '#616161'} />
          <Text style={selectedTab === 'pessoal' ? styles.activeNavText : styles.navText}>Pessoal</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('experiencia')} style={styles.navItem}>
          <Ionicons name="briefcase" size={24} color={selectedTab === 'experiencia' ? '#D81B60' : '#616161'} />
          <Text style={selectedTab === 'experiencia' ? styles.activeNavText : styles.navText}>Experiência</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('educacao')} style={styles.navItem}>
          <Ionicons name="school" size={24} color={selectedTab === 'educacao' ? '#D81B60' : '#616161'} />
          <Text style={selectedTab === 'educacao' ? styles.activeNavText : styles.navText}>Educação</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('idiomas')} style={styles.navItem}>
          <Ionicons name="language" size={24} color={selectedTab === 'idiomas' ? '#D81B60' : '#616161'} />
          <Text style={selectedTab === 'idiomas' ? styles.activeNavText : styles.navText}>Idiomas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSelectedTab('softskills')} style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color={selectedTab === 'softskills' ? '#D81B60' : '#616161'} />
          <Text style={selectedTab === 'softskills' ? styles.activeNavText : styles.navText}>Soft Skills</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fce4ec',
    paddingTop: 20,
  },
  section: {
    flex: 1,
    padding: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D81B60',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: '#616161',
    marginBottom: 5,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#f8bbd0',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#616161',
  },
  activeNavText: {
    fontSize: 12,
    color: '#D81B60',
  },
});
