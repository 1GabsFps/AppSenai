import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/botao";
import { Link } from "expo-router";

function login() {
  return (
    <View>
      <View>
        <Logo text="Login" color="black" />
      </View>
      <View>
        <Text style={styles.text}>Faça Login Para Acessar o Sistema!</Text>

        <InputField label="Email:" placeholder="Digite Email" secureTextEntry={false} />
        <InputField label="Senha:" placeholder="Digite sua Senha" secureTextEntry={true} />
        <Link href="./drawer/home/index" asChild>
          <Botao text="Entrar" color="black" href="./drawer/home/itens"/>
        </Link>
      </View>
      <View style={styles.links}>
        <Link href="/cadastro" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Cadastre-Se</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/rec" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
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