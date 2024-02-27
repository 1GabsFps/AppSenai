    import React from "react";
    import { Image, Text, View, StyleSheet } from "react-native";

    const Itens = ({id, item }) => {
        return(
            <View style={styles.display}>
                <Text style={styles.text}>{id}</Text>
                <Text style={styles.item}>{item}</Text>
            </View>
        );
    };

    export default Itens;

    const styles = StyleSheet.create({
        display: {
            borderBottomColor: '#f5f5f5',
            borderBottomWidth: 2,
        },
        text : {
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
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