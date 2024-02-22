import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking, StatusBar } from "react-native";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/botao";

function login() {
  return (
    <View>
      <View>
        <Logo text="Login" color="black" />
      </View>
      <View>
        <Text style={styles.text} >Faça Login Para Acessar o Sistema!</Text>

        <InputField label="Email:" placeholder="Digite Email" />
        <InputField label="Senha:" placeholder="Digite sua Senha" />
        <Botao text="Entrar" color="black" />
      </View>
      <View style={styles.links}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={styles.link}>Cadastre-Se</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com')}>
          <Text style={styles.link}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: 'black',
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
    }, 
    link: {
    fontSize: 14,
    color: 'blue',
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});
export default login;