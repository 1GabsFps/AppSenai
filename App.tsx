import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Itens from './screens/itens';
import AddItens from './screens/additens';
import InfoItens from './screens/infoitens';
import Cadastro from './screens/cadastro';
import Scanner from './screens/qrcode';
export default function App() {
  return (
    <View>
      <InfoItens />
      <StatusBar style="auto" />
    </View>
  );
}


