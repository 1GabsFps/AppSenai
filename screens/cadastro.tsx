import { StatusBar } from 'expo-status-bar';
import { View, ScrollView} from 'react-native';
import React from 'react';
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/botao';

function cadastro () {
  return (
    <View>

        <View>
            <Logo text="Cadastre-se" color="red" />
        </View>
        <ScrollView>
            <InputField label="Nome" placeholder="Digite seu nome" showText={true} />
            <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" showText={true} />
            <InputField label="Email" placeholder="Digite seu Email" showText={true} />
            <InputField label="Telefone" placeholder="Digite seu Telefone" showText={true} />
            <InputField label="Senha" placeholder="Digite sua Senha" showText={false} />
            <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" showText={false}/>
            <Botao text="Cadastrar" color="black" />

        </ScrollView>
        <StatusBar style="auto" />
    </View>
  );
}

export default cadastro;