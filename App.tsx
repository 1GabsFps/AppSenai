import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Itens from './screens/itens';
import AddItens from './screens/additens';
import InfoItens from './screens/infoitens';
import Cadastro from './screens/cadastro';
export default function App() {
  return (
    <View>
      <AddItens />
      <StatusBar style="auto" />
    </View>
  );
}


