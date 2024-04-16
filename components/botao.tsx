import React from "react";
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";

type BotaoProps = {
    text: string,
    color: string,
    href: string,
}


const Botao= ({text, color, href}: BotaoProps) => {

    const styles = StyleSheet.create({
        botao: {
            alignItems: 'center',
            backgroundColor: color,
            padding: 10,
            margin: 10,
            borderRadius: 10,
        },
        textbotao: {
            color: 'white',
            fontSize: 20,
        },
    });
    return (
        <Link href={href} asChild>
        <TouchableOpacity style={styles.botao}>
        <Text style={styles.textbotao}>{text}</Text>
        </TouchableOpacity>
        </Link>
    );
}

export default Botao;