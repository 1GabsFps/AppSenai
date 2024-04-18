import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from "react-native";
import Itens from "../../../components/item";
import { AntDesign,FontAwesome5, FontAwesome6, Entypo, Foundation} from '@expo/vector-icons';
import Bottom from "../../../components/bottom";
import { Link } from "expo-router";
import useTheme from "../../../temas/Temas";
const itens = () => {
    const cores = useTheme();

    const styles = StyleSheet.create({
    displaytop:{
        padding: 20,
        marginTop: 40,
        width: "100%",
        height: 120,
        flexDirection: "row",
        justifyContent: "space-between",
    },
display: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    backgroundColor: cores.bgPrimary,
},
addButtonContainer: {
    position: "absolute",
    bottom: 20,
    right: 0,
    margin: 20,
    marginBottom: 40,
    marginRight: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: cores.bgPrimary,
    alignItems: "center",
    justifyContent: "center",
},
});
    return (
        <>
        <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
        <View style={{
            backgroundColor: cores.bgPrimary,
            height: "100%",
        }}>
        <ScrollView>
            <View>
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
                <Itens id="956389" item="CADEIRA  SENAI" href="../../infoitens"  />
            </View>
        </ScrollView>
            <Link href="../../additens" asChild>
                <TouchableOpacity style={styles.addButtonContainer}>
                    <AntDesign name="pluscircle" size={50} color="red" />
                </TouchableOpacity>
            </Link>
        </View>
        </>
    );
};

export default itens;