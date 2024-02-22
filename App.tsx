import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/login';
export default function App() {
  return (
    <View>
      <Login/>
      <StatusBar style="auto" />
    </View>
  );
}


