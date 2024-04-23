import { Stack } from 'expo-router';
import { StatusBar, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../temas/Temas';


function CustomHeaderButton(icone) {
    return (
        <TouchableOpacity onPress={() => {}}>
          {icone}
        </TouchableOpacity>
    );
}

export default function Layout() {
  const cores = useTheme();
  return (
    <>
    <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <Stack
      screenOptions={{
        headerTransparent: true, 
        headerTintColor: '#fff',
        headerTitle: "",
        statusBarStyle: 'light'
      }}>
    <Stack.Screen name="index" options={{ statusBarColor:cores.bgPrimary}}/>

    <Stack.Screen name="additens" options={{statusBarColor:cores.bgPrimary,
    headerTintColor: '#fff',
    headerTitle: "Cadastro de Itens",
    headerTransparent: false,
    headerStyle: {backgroundColor: "#ff0000"},
    headerTitleAlign: 'center',
    headerRight: () => (
      CustomHeaderButton(<Ionicons name="add-circle" size={24} color="white" />)
    ),
  }}/>
    <Stack.Screen name="cadastro" options={{statusBarColor:cores.bgPrimary}}/>
    <Stack.Screen name="infoitens" options={{statusBarColor: cores.bgPrimary,
    headerTintColor: '#fff',
    headerTitle: "Descrição do item",
    headerTransparent: false,
    headerStyle: {backgroundColor: "#ff0000"},
    headerTitleAlign: 'center',
    headerRight: () => (
        CustomHeaderButton(<Ionicons name="reload" size={24} color="white" />)
    ),

    }}/>
    <Stack.Screen     name="editar" 
    options={{
        statusBarColor: cores.bgPrimary,
        headerTintColor: '#fff',
        headerTitle: "Editar",
        headerTransparent: false,
        headerStyle: {backgroundColor: "#ff0000"},
        headerTitleAlign: 'center', 
        headerRight: () => (
            CustomHeaderButton(<Ionicons name="checkmark" size={24} color="white" />)
        ),
    }}
    /> 
    <Stack.Screen name="rec" options={{statusBarColor:cores.bgPrimary}}/> 
    <Stack.Screen name="drawer" options={{headerShown:false,
      statusBarColor:cores.bgPrimary
    }}/> 
    </Stack>
    </>
  );
}