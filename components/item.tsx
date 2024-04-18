    import React from "react";
    import { Image, Text, View, StyleSheet,  } from "react-native";
    import useTheme from "../temas/Temas";
    import { TouchableOpacity } from "react-native-gesture-handler";
    import { Link } from "expo-router";

type ItensProps = {
    id: string,
    item: string,
    href : string,
}

    const Itens = ({id, item, href}: ItensProps) => {
        const cores = useTheme();
        const styles = StyleSheet.create({
        display: {
            borderBottomColor: cores.bgPrimaryVariant,
            borderBottomWidth: 2,
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
            fontSize: 15,
            fontWeight: '500',
            color: 'lightgray',
            alignContent: 'center',
            marginLeft: 25,
            marginBottom: 20,
        },
    });
        return(
        <Link href={href} asChild>
            <TouchableOpacity style={styles.display}>
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.item}>{item}</Text>
            </TouchableOpacity>
        </Link>
        );
    };

    export default Itens;
