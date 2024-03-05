import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import InventoryInput from "../components/invinput";
import Bottom from "../components/bottom";
export default function AddItens() {
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return(

<View>
    <Header text="Cadastro de itens" color="red" colortxt="white" icon1="arrowleft" icon2="pluscircleo"/>
    <View style={styles.paddingtop}>
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    </View>
    <Bottom color="ffff" coloricons= "#595959" bottom={-430} />
    </View>
);
} 