import React from "react";
import { StyleSheet, Text, View, TouchableOpacity} from "react-native";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/botao";
import { Link } from "expo-router";
import useTheme from "../temas/Temas";

function login() {

  const cores = useTheme();

  const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '500',
    color: cores.textColor,
    alignContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
  },
  link: {
    fontSize: 14,
    
  },
  links: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

  return (
    <View>
    <View style={
      {
        backgroundColor: cores.bgPrimary,
        height: '100%',
      }
    
    }>
      <View>
        <Logo text="Login" color={cores.bgPrimary} />
      </View>
      <View>
        <Text style={styles.text}>Faça Login Para Acessar o Sistema!</Text>

        <InputField label="Email:" placeholder="Digite Email" secureTextEntry={false} />
        <InputField label="Senha:" placeholder="Digite sua Senha" secureTextEntry={true} />
        <Link href="./drawer/home/index" asChild>
          <Botao text="Entrar" color={cores.bgSecondary} href="./drawer/home/itens"/>
        </Link>
      </View>
      <View>
        <View style={styles.links}>
        <Link href="/cadastro" asChild>
          <TouchableOpacity>
            <Text style={[styles.link, {color: cores.textColor}]}>Cadastre-Se</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/rec" asChild>
          <TouchableOpacity>
            <Text style={[styles.link, {color: cores.textColor}]}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </Link>
        </View>
      </View>
    </View>
    </View>
  );
}


export default login;