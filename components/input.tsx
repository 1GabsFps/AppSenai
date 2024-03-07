import React from 'react';
import { TextInput, Text, View, StyleSheet, TextInputProps } from 'react-native';

interface InputFieldProps extends TextInputProps{
  label: string;
}


export default function InputField({ label, placeholder, secureTextEntry }: InputFieldProps)  {
  const [hover, sethover] = React.useState('#f5f5f5');
  const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '95%',
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: hover,
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
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onFocus={() => sethover("#f39200")}
          onBlur={() => sethover("#f5f5f5")}
        />
    </View>
  );
};


