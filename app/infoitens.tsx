import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/header";
import ProdutoInfo from "../components/produtoinfo";
import Bottom from "../components/bottom";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function InfoItens() {
    const styles = StyleSheet.create({
        paddingtop: {
            paddingTop: 60,
            backgroundColor: "#FBFBFB",
        },
            addButtonContainer: {
    position: "absolute",
    bottom: -250,
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
        },);
    return(
        <View>
            <View>
                <Header cor="#ff0000" texto="Informações do Item" />
            </View>
            <View style={styles.paddingtop}>
                <ProdutoInfo label='N inventario' info='956389'/>
                <ProdutoInfo label='Descrição' info='CADEIRA  SENAI'/>
                <ProdutoInfo label='Local' info='Sala 1'/>
                <ProdutoInfo label='Responsavel' info='João'/>
                <ProdutoInfo label='Data de registro' info='12/12/2021'/>
            </View>
            <View style={styles.addButtonContainer}>
                <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
            </View>
            <View>
                <Bottom color="ffff" coloricons= "#595959" position="fixed" bottom={-325}/>
            </View>
        </View>
    )
}
