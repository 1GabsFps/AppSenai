import React from "react";
import { View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Itens from "../../../components/item";
import { AntDesign,FontAwesome5, FontAwesome6, Entypo, Foundation} from '@expo/vector-icons';
import Bottom from "../../../components/bottom";
import { Link } from "expo-router";

const itens = () => {
    return (
        <View>
        <ScrollView>
            <View>
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
                <Itens id="956389" item="CADEIRA  SENAI" />
            </View>
        </ScrollView>
            <Link href="../../additens" asChild>
                <TouchableOpacity style={styles.addButtonContainer}>
                    <AntDesign name="pluscircle" size={50} color="red" />
                </TouchableOpacity>
            </Link>
        </View>
    );
};

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
    backgroundColor: "#ff0000",
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
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
},
});

export default itens;