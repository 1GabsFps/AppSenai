import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import Header from "../components/header";
import InventoryInput from "../components/invinput";
import Bottom from "../components/bottom";
import useTheme from "../temas/Temas";
export default function AddItens() {
    const cores = useTheme();
        const styles = StyleSheet.create({
    paddingtop: {
        paddingTop: 60,
    }});

    return (
        <View style={
            {
                backgroundColor: cores.bgPrimary,
                height: '100%',
            }
        }>
        <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
<View>
    <View style={styles.paddingtop}>
    <InventoryInput label='N inventario'/>
    <InventoryInput label='Descrição' />
    <InventoryInput label='Local'/>
    <InventoryInput label='Responsavel'/>
    <InventoryInput label='Data de registro'/>
    </View>
    </View>
</View>
    );
} 