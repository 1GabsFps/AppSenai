import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type BotaoProps = {
    text: string,
    color: string,
}

const Botao= ({text, color}: BotaoProps) => {
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
       <TouchableOpacity style={styles.botao}>
        <Text style={styles.textbotao}>{text}</Text>
      </TouchableOpacity>
    );
}

export default Botao;