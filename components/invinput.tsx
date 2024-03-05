import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function InventoryInput() {
    return (
        <View style={styles.inventoryInput}>
            <TextInput style={styles.input} />
            <Text style={[styles.label,]}>Nº Inventário</Text>
        </View>
    );
}

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
        fontWeight: 'bold',
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        fontSize: 16,
        lineHeight: 24,
        width: '90%',
    },
});
