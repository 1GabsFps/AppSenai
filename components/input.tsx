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
    width: '80%',
    margin: 12,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginLeft: 25,
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginTop: 10,
    marginLeft: 25,
  },
});

export default InputField;

