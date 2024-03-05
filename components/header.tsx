import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {AntDesign } from '@expo/vector-icons';

export default function Header({ text, color, colortxt, icon1, icon2 }) {
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
                <AntDesign name={icon1} size={24} color={colortxt} />
                <Text style={{ color: colortxt }}>{text}</Text>
                <TouchableOpacity>
                <AntDesign name={icon2} size={24} color={colortxt} />
                </TouchableOpacity>
            </View>
        </View>
    );
}
