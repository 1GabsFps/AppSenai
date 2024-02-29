import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Itens from './screens/itens';
import Cadastro from './screens/cadastro';
export default function App() {
  return (
    <View>
      <Cadastro/>
      <StatusBar style="auto" />
    </View>
  );
}


