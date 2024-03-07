import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default function InventoryInput({label}) {
    const [hover, sethover] = React.useState('black');
    const styles = StyleSheet.create({
    inventoryInput: {
        marginLeft: 25,
        marginBottom: 10,
        marginTop: 30,
        paddingTop: 14,
        position: 'relative',
    },
    label: {
        position: 'absolute',
        top: 5, 
        left: 10,
        backgroundColor: '#fff',
        paddingHorizontal: 2,
        color: hover,
        fontWeight: 'bold',
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: hover,
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 24,
        width: '90%',
    },
});
    return (
        <View style={styles.inventoryInput}>
            <TextInput style={styles.input} 
            
            onFocus={() => sethover("#f39200")}
            onBlur={() => sethover("black")}/>
            <Text style={[styles.label,]}>{label}</Text>
        </View>
    );
}

