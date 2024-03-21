import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import React from 'react';
import { Link } from 'expo-router';

export default function Header({ text, color, colortxt, icon1, icon2, h1, h2 }) {
    const styles = StyleSheet.create({
        displaytop: {
            padding: 20,
            paddingTop: 60,
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: color
        }
    });

    return (
        <View>
            <View style={styles.displaytop}>
                <Link href={h1} asChild>
                    <TouchableOpacity>
                        {icon1}
                    </TouchableOpacity>
                </Link>
                <Text style={{ color: colortxt }}>{text}</Text>
                <Link href={h2} asChild>
                    <TouchableOpacity>
                        {icon2}
                    </TouchableOpacity>
                </Link>
            </View>
        </View>
    );
}
