import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';

export default function Layout(){
    return <Tabs screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: "#FF0000",
        },
        headerLeft: () => (
            <DrawerToggleButton />
        ),

        headerRight: () => (
            ScreenStackHeaderSearchBarView ({
                placeholder: "Pesquisar",
            })
        )
        
    }}>
        <Tabs.Screen
        name="index"
        options={{
            title: "Scanner",
            tabBarIcon: ({ color }) => (
                <FontAwesome6 name="camera-rotate" size={24} color={595959} />
            ),
        
        }}>

        </Tabs.Screen>

        <Tabs.Screen 
        name="itens"
        options={{
            title: "Itens",
            tabBarIcon: ({ color }) => (
                <FontAwesome5 name="list-ol" size={24} color={595959} />
            ),
        }}>

        </Tabs.Screen>
        
    </Tabs>;
}