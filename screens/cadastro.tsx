import React from 'react';
import { View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/botao';

export default function Cadastro() {
  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View>
        <Logo text="Cadastre-se" color="red" />
        <InputField label="Nome" placeholder="Digite seu nome" hideText={false} />
        <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" hideText={false} />
        <InputField label="Email" placeholder="Digite seu Email" hideText={false} />
        <InputField label="Telefone" placeholder="Digite seu Telefone" hideText={false} />
        <InputField label="Senha" placeholder="Digite sua Senha" hideText={true} />
        <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" hideText={true}/>
        <Botao text="Cadastrar" color="black" />
      </View>
    </KeyboardAwareScrollView>
  );
}