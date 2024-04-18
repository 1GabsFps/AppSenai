import React from 'react';
import { TextInput, Text, View, StyleSheet, TextInputProps, useColorScheme } from 'react-native';
import  useTheme from "../temas/Temas";

interface InputFieldProps extends TextInputProps{
  label: string;
}


export default function InputField({ label, placeholder, secureTextEntry }: InputFieldProps)  {
  const [hover, sethover] = React.useState('#f5f5f5');
  const cores = useTheme();
  const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '95%',
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: hover,
    backgroundColor: cores.bgPrimaryVariant,
    borderRadius: 10,
  },
  text: {
    fontSize: 14,
    color: cores.textColor,
    
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
          placeholderTextColor={cores.textColorVariant}
          onFocus={() => sethover("#f39200")}
          onBlur={() => sethover("#f5f5f5")}
        />
    </View>
  );
};


