import React from "react";
import Logo from "../components/logo";
import InputField from "../components/input";
import Botao from "../components/botao";
import { Image, Text, View, StyleSheet, StatusBar, useColorScheme } from "react-native";
import useTheme from "../temas/Temas";



function Recuperar(){
    const cores = useTheme();
    const Theme = useColorScheme();
    const backgroundColor = Theme === 'dark' ? cores.bgPrimary : '#011E83';
    const corbotoes = Theme === 'dark' ? cores.bgSecondary : '#000000';
    const styles = StyleSheet.create({
    text : {
        fontSize: 20,
        fontWeight: '500',
        color: cores.textColor,
        alignContent: 'center',
        textAlign: 'center',
        marginBottom: 20,
    },
});
    return(
    <>
    <StatusBar backgroundColor={cores.bgPrimaryVariant} barStyle="light-content" />
    <View style={{
        backgroundColor: cores.bgPrimary,
        height: '100%',
    
    }}>
    <View>
    <Logo text="Recuperção de Senha" color={backgroundColor} />
    </View>
    <Text style={styles.text}>Insira seu e-mail para recuperar a senha!</Text>
    <InputField  label="Email:" placeholder="Digite seu Email" secureTextEntry={false}/>
    <Botao text="Recuperar " color={corbotoes} href="." />
    </View>
    </>
)}

export default Recuperar;