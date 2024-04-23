import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import useTheme from "../../../temas/Temas";
import { TouchableOpacity } from "react-native";


export default function Layout(){
    const cores = useTheme();
    return(
    <>
        <Tabs screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: cores.bgPrimary,
        },
        headerTintColor: cores.textColor,
        headerLeft: () => (
            <DrawerToggleButton tintColor={cores.textColor} />
        ),
        headerRight: () => (
            <TouchableOpacity>
                <FontAwesome5 name="search" size={24} color={cores.textColor} />
            </TouchableOpacity>
        )
    }}>
        <Tabs.Screen
        name="index"
        options={{
            title: "Scanner",
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="camera-rotate" size={24} color={cores.bgPrimary} />
            ),
                        tabBarStyle: {
                backgroundColor: cores.bgSecondary,
                
            },
            tabBarActiveTintColor: cores.bgPrimary,
            tabBarInactiveTintColor: cores. bgPrimary,
    
        }}>

        </Tabs.Screen>

        <Tabs.Screen 
        name="itens"
        options={{
            title: "Itens",
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="list-ol" size={24} color={cores.bgPrimary} />
            ),
            tabBarStyle: {
                backgroundColor: cores.bgSecondary,
                
            },
            tabBarActiveTintColor: cores.bgPrimary,
            tabBarInactiveTintColor: cores.bgPrimary,
        }}>

        </Tabs.Screen>
        
    </Tabs>
    </>
    )
}