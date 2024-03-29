import { StyleSheet, Text, View, Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';

type HeaderProps ={
  cor: string,
  texto: string
}

export default function Header ({cor, texto}: HeaderProps) {
    return (
      <View style={[stylesHea.header, {backgroundColor: cor}]}>
          <StatusBar style='light'/>
          <Image source={require('../assets/Logo.png')}/>
          <Text style={stylesHea.textoed}>{texto}</Text>
      </View>
    );
  }

  const stylesHea = StyleSheet.create({
    header: {
      height: 200,
      width: '100%',
      justifyContent:'center',
      alignItems:'center',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    },

    textoed:{
      fontWeight: '400',
      fontSize: 20,
      lineHeight: 24,
      color: '#FFFFFF',
      margin: 5,
    },
  }
)