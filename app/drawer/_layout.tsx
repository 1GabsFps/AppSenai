import { Drawer } from "expo-router/drawer";
import { StyleSheet, Text, View, Image, StatusBar} from "react-native";
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import DrawerInfo from "../../components/drawerinfo";
import { Ionicons } from '@expo/vector-icons';
import useTheme from "../../temas/Temas";

export default function Layout() {
    const cores = useTheme();

    const styles = StyleSheet.create({
principal: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "600",
    color: cores.textColor,
},
secundario:{
    fontSize: 12,
    lineHeight: 14.52,
    fontWeight: "400",
    color: cores.textColorVariant,
},
foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
},
});

return (
    <>
    <Drawer
    drawerContent={() => {
        return (
            <View
            
            style={{
                backgroundColor: cores.bgPrimaryVariant,
                height: "100%",
            
            }}>
                <View style={{
                    paddingTop: 20,
                    paddingBottom: 20,
                    padding: 24,
                    gap: 16,
                    flexDirection: "row",
                    borderBottomColor : cores.bgInfo,
                    borderBottomWidth: 1,
                    backgroundColor: cores.bgPrimaryVariant,
                }}>
                    <Image source={require('../../assets/perfil.jpg')} style={styles.foto} />
                    <View style={{
                        paddingTop: 30,
                    }}>
                        <Text style={styles.principal}>Flávio Josefo</Text>
                        <Text style={styles.secundario}>flavio@email.com</Text>
                    </View>
                </View>
                <DrawerInfo icon={<Ionicons name="person" size={17} color="#D9D9D9" />} Titulo="Perfil" t1="Alterar e-mail" t2="Alterar senha" />
                <DrawerInfo icon={<FontAwesome6 name="circle-exclamation" size={17} color="#D9D9D9" />} Titulo="Sobre o App" t1="" t2="" />
                <DrawerInfo icon={<Ionicons name="chatbox-ellipses" size={17} color="#D9D9D9" />} Titulo="Suporte" t1="" t2=""/>
                <DrawerInfo icon={<Ionicons name="exit" size={17} color="#D9D9D9" />} Titulo="Sair"  t1="" t2=""/>
            </View>
        );
    }}
    screenOptions={{
        header: () => null,
        drawerStyle: {
            width: 320, 
        },
    }}
    >
    </Drawer>
    </>
);}