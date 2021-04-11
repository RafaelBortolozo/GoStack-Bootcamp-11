import React, { useEffect, useState } from 'react'; //obrigatório para usar JSX
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';
import api from './services/api';

export default function App(){
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    api.get('projects').then(response => {
      setProjects(response.data)
    })
  }, [])
  
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={styles.container.backgroundColor}/>
      
      <SafeAreaView style={styles.container}>
        <FlatList
          data={projects}  //array dos elementos da lista
          keyExtractor={project => project.id}  //arrow function que retorna algo unico
                                                //de cada elemento da lista, no caso o id
          
          renderItem={({ item: project }) => ( //arrow function que retorna cada elemento do array
            <Text style={styles.project}> {project.title} </Text>
          )}  
        />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1'
  },
  project: {
    color: '#FFF',
    fontSize: 25
  }
})