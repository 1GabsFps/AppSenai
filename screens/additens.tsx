import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/header";
import InventoryInput from "../components/invinput";
import Bottom from "../components/bottom";
import { AntDesign } from '@expo/vector-icons';
export default function AddItens() {
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View>
<View>
    <Header text="Cadastro de itens" color="red" colortxt="white" icon1={<AntDesign name="arrowleft" size={24} color="white" />} icon2={<AntDesign name="pluscircleo" size={24} color="white" />}/>
    <View style={styles.paddingtop}>
    <InventoryInput label='N inventario'/>
    <InventoryInput label='Descrição' />
    <InventoryInput label='Local'/>
    <InventoryInput label='Responsavel'/>
    <InventoryInput label='Data de registro'/>
    </View>
    <Bottom color="ffff" coloricons= "#595959" bottom={0} position="fixed" />
    </View>
</View>
    );
} 