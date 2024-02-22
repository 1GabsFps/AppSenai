import React from "react";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/botao";
import { Image, Text, View, StyleSheet } from "react-native";

function Recuperar(){
    return(
    <View>
    <View>
    <Logo text="Recuperção de Senha" color="darkblue" />
    </View>
    <Text>Insira seu e-mail para recuperar a senha!</Text>
    <InputField  label="Email:" placeholder="Digite seu Email"/>
    <Botao text="Recuperar" color="black" />
    </View>
)}

export default Recuperar;