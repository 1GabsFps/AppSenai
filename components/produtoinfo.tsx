import React from "react";
import { View, Text, StyleSheet} from "react-native";
import useTheme
 from "../temas/Temas";
export default function ProdutoInfo({label, info}) {
    const cores = useTheme();
const styles = StyleSheet.create({
    view :{
        marginTop: 20,
    },
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: cores.textColor,
        alignContent: 'center',
        marginTop: 20,
        marginLeft: 25,
    },
    item: {
        fontSize: 20,
        fontWeight: '500',
        color: cores.textColorVariant,
        alignContent: 'center',
        marginTop: 10,
        marginLeft: 25,
        marginBottom: 20,
    },
});
    return (
        <View>
            <Text style={styles.text}>{label}:</Text>
            <Text style={styles.item}>{info}</Text>
        </View>
    );
}