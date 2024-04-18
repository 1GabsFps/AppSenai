import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import useTheme from "../../../temas/Temas";



export default function Scanner() {
    const cores = useTheme();
    const styles = StyleSheet.create({
        displaycode: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: cores.bgPrimary,
            height: "100%",

        },
    });

    return(
    <>
    <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <View style={styles.displaycode}>
        <StatusBar backgroundColor={cores.bgPrimary} barStyle="light-content" />
        <MaterialIcons name="qr-code-scanner" size={300} color={cores.textColor} />
    </View>
    </>


);
} 