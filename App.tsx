import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Recuperar from './screens/rec';
export default function App() {
  return (
    <View>
      <Recuperar/>
      <StatusBar style="auto" />
    </View>
  );
}


