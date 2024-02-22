import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity , Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import React,{ useState } from 'react';
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/botao';

function cadastro () {
  return (
    <View>

        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <View>
            <InputField label="Nome" placeholder="Digite seu nome" />
            <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" />
            <InputField label="Email" placeholder="Digite seu Email" />
            <InputField label="Telefone" placeholder="Digite seu Telefone" />
            <InputField label="Senha" placeholder="Digite sua Senha" />
            <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" />
            <Botao text="Cadastrar" color="black" />

        </View>
        <StatusBar style="auto" />
    </View>
  );
}

export default cadastro;