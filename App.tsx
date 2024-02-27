import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Itens from './screens/itens';
export default function App() {
  return (
    <View>
      <Itens/>
      <StatusBar style="auto" />
    </View>
  );
}


