import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';

const InputField = ({ label, value, setValue, placeholder }) => {
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '95%',
    margin: 12,
    padding: 10,
    borderWidth: 0,
    borderColor: 'black',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,

  },
  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginLeft: 25,
  },
});

export default InputField;

