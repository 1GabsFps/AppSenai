import React from "react";
import { View, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import ProdutoInfo from "../components/produtoinfo";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import useTheme from "../temas/Temas";
import { Link } from "expo-router";

export default function InfoItens() {
    const cores = useTheme();
    const styles = StyleSheet.create({
        paddingtop: {
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
    return(
        <View style={{
            paddingTop: 150,
            backgroundColor: cores.bgPrimary,
            height: "100%",
        }}>
            <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
            <View style={styles.paddingtop}>
                <ProdutoInfo label='N inventario' info='956389'/>
                <ProdutoInfo label='Descrição' info='CADEIRA  SENAI'/>
                <ProdutoInfo label='Local' info='Sala 1'/>
                <ProdutoInfo label='Responsavel' info='João'/>
                <ProdutoInfo label='Data de registro' info='12/12/2021'/>
            </View>
            <View style={styles.addButtonContainer}>
                <Link href="/editar" asChild>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="pencil-circle" size={60} color="red" />
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    )
}