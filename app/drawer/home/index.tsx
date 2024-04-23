import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Camera } from 'expo-camera';
import useTheme from "../../../temas/Temas";

export default function Scanner() {
    const [openCamera, setOpenCamera] = useState(false);
    const [hasPermission, setHasPermission] = useState(null);
    const cores = useTheme();
    const styles = StyleSheet.create({
        displaycode: {
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: cores.bgPrimary,
            height: "100%",
        },
        closeButton: {
            position: 'absolute',
            top: 40,
            right: 20,
        },
    });

    useEffect(() => {
    (async () => {
        try {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        } catch (e) {
            console.log(e);
        }
    })();
}, []);

    if (hasPermission === null) {
        return <View />;
    }
        if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return (
            <>
                <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
                <Text>Sem acesso a camera!</Text>
            </>
        );
    }

    if (openCamera) {
        return (
            <View style={{ flex: 1 }}>
                <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
                <Camera style={{ flex: 1 }} />
                <TouchableOpacity style={styles.closeButton} onPress={() => setOpenCamera(false)}>
                    <MaterialIcons name="close" size={30} color={cores.textColor} />
                </TouchableOpacity>
            </View>
        );
    }

    return(
        <>
            <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
            <View style={styles.displaycode}>
                <TouchableOpacity onPress={() => setOpenCamera(true)}>
                    <MaterialIcons name="qr-code-scanner" size={300} color={cores.textColor} />
                </TouchableOpacity>
            </View>
        </>
    )
}