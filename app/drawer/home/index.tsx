import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../../../components/header";
import Bottom from "../../../components/bottom";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


export default function Scanner() {

    const styles = StyleSheet.create({
        displaycode: {
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 300,
            backgroundColor: "#FBFBFB",
        },
    });

    return(
<View>
    <Header text="Scanner" color="red" colortxt="white" icon1={<AntDesign name="arrowleft" size={24} color="white" />} icon2={<AntDesign name="pluscircleo" size={24} color="white" />
}/>
    <View style={styles.displaycode}>
        <MaterialIcons name="qr-code-scanner" size={300} color="#5d5c5c" />
    </View>
        <Bottom color="#ffff" coloricons="#595959"  position="fixed" bottom={-230}/>
    </View>
);
} 