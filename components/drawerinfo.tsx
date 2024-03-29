    import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function DrawerInfo({ icon, Titulo, t1, t2}){
    const info = !!t1 || !!t2;
    return(
    
<View>
<View style={{
            flexDirection: "row",
            paddingLeft: 24,
            paddingTop: 20,
            gap: 10,
            paddingBottom: 0,
        }}>
            {icon}
            <Text style={styles.principal}>{Titulo}</Text>
        </View>
        {info &&
            <View style ={{
            paddingLeft: 49,
            
            }}>
            <Text style={styles.secundario}>{t1}</Text>
            <Text style={styles.secundario}>{t2}</Text>
        </View>
        }
        </View>)
        };
        

const styles = StyleSheet.create({
principal: {
    fontSize: 14,
    lineHeight: 16.94,
    fontWeight: "600",
},
secundario:{
    fontSize: 12,
    lineHeight: 14.52,
    fontWeight: "400",
},
foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
},
});