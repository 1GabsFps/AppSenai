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
            <InputField label="Nome" placeholder="Digite seu nome" hideText={false} />
            <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" hideText={false} />
            <InputField label="Email" placeholder="Digite seu Email" hideText={false} />
            <InputField label="Telefone" placeholder="Digite seu Telefone" hideText={false} />
            <InputField label="Senha" placeholder="Digite sua Senha" hideText={true} />
            <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" hideText={true}/>
            <Botao text="Cadastrar" color="black" />

        </ScrollView>
        <StatusBar style="auto" />
    </View>
  );
}

export default cadastro;