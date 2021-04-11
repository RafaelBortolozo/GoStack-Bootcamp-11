import React from 'react'; //obrigatório para usar JSX
import { View, Text, StyleSheet, StatusBar } from 'react-native'

export default function App(){
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={styles.container.backgroundColor}/>
      <View style={styles.container}>
        <Text style={styles.title}>Hello World</Text>
      </ View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    justifyContent: 'center', //Centralização vertical
    alignItems: 'center'      //Centralização horizontal
  },
  title: {
    color: '#FFF',
    fontSize: 25,
    fontWeight: 'bold'
  }
})