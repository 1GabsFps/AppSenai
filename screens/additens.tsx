import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import InventoryInput from "../components/invinput";
import Bottom from "../components/bottom";
export default function AddItens() {
    return(
<View>
    <Header text="Cadastro de itens" color="red" colortxt="white" icon1="arrowleft" icon2="pluscircleo"/>
    <View>
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    <InventoryInput />
    </View>
    <Bottom />
    </View>
);
} 