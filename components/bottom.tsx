import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AntDesign, FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
            const Bottom = () => {
                const styles = StyleSheet.create({
display: {
    position: "absolute",
    bottom: -100,
    height: 60,
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
    backgroundColor: "#ff0000",
}}
                );
                return (
                    <View>
                        <View style={styles.display}>
                            <FontAwesome5 name="list-ol" size={24} color="#ffffff" />
                            <FontAwesome6 name="camera-rotate" size={24} color="#ffffff" />
                        </View>
                    </View>
                );
            };

            export default Bottom;