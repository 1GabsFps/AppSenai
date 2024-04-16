import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerTransparent: true, 
        headerTintColor: '#fff',
        headerTitle: "",
        statusBarStyle: 'light'
      }}>
    <Stack.Screen name="index" options={{ statusBarColor:"#000000"}}/>
    <Stack.Screen name="additens" options={{statusBarColor:"#FF0000",
    headerTintColor: '#ff0000',
  }}/>
    <Stack.Screen name="cadastro" options={{statusBarColor:"#FF0000"}}/>
    <Stack.Screen name="infoitens" options={{statusBarColor:"#FF0000"}}/>
    <Stack.Screen name="editar" options={{statusBarColor:"#FF0000"}}/> 
    <Stack.Screen name="rec" options={{statusBarColor:"#011E83"}}/> 
    <Stack.Screen name="drawer" options={{headerShown:false}}/> 
    </Stack>
  );
}