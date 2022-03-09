import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Image, Button,  } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from'./components/AssetExample' ;

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

const use = () => {
  const [text, setText] = useState('');
}

export default function App() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('icone.png')} />
      <Text style={styles.label}>Login:</Text>
      <TextInput style={styles.campo}/>
      <Text style={styles.label}> Senha: </Text>
      <TextInput style={styles.campo}
        placeholder="Digite seu login"
        use(),
        }
      />
      <View style={styles.exemplo}></View>
      <Button style={styles.botao}
        title='LOGAR'
        color='#000'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    padding: 8,
  },
  campo: {
    margin: 10, 
    height: 30,
    borderWidth: 0.5,

  },
  logo: {
    position: "absolute",
    width: 50,
    height: 50,
    marginLeft: 125,
    marginBottom: 400,
  },
  exemplo: {
    margin:10,
    marginLeft: 10,
    marginRight: 10
  },
});
