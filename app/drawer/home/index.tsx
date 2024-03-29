import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


export default function Scanner() {

    const styles = StyleSheet.create({
        displaycode: {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 300,
            backgroundColor: "#FBFBFB",
        },
    });

    return(
    <View style={styles.displaycode}>
        <MaterialIcons name="qr-code-scanner" size={300} color="#5d5c5c" />
    </View>


);
} 