import React from 'react';
import { View, useColorScheme } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Logo from '../components/logo';
import InputField from '../components/input';
import Botao from '../components/botao';
import useTheme from '../temas/Temas';

export default function Cadastro() {
  const cores = useTheme();
  return (

    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{ flexGrow: 1 }}
      scrollEnabled={false}
    >
      <View style={
        {backgroundColor: cores.bgPrimary, height: '100%'}
      }>
        <Logo text="Cadastre-se" color={cores.bgPrimary} />
        <InputField label="Nome" placeholder="Digite seu nome" secureTextEntry={false} />
        <InputField label="Sobrenome" placeholder="Digite seu Sobrenome" secureTextEntry={false} />
        <InputField label="Email" placeholder="Digite seu Email" secureTextEntry={false} />
        <InputField label="Telefone" placeholder="Digite seu Telefone" secureTextEntry={false} />
        <InputField label="Senha" placeholder="Digite sua Senha" secureTextEntry={true} />
        <InputField label="Confirme sua Senha" placeholder="Confirme sua Senha" secureTextEntry={true}/>
        <Botao text="Cadastrar" color={cores.bgSecondary  } href='/index' />
      </View>
    </KeyboardAwareScrollView>
  );
}