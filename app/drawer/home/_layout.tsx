import { DrawerToggleButton } from "@react-navigation/drawer";
import { Tabs } from "expo-router";
import { ScreenStackHeaderSearchBarView } from "react-native-screens";

export default function Layout(){
    return <Tabs screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
            backgroundColor: '#FF0000',

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

    </Tabs>;
}