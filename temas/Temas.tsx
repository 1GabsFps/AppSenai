import { useColorScheme } from "react-native";

interface Cores{
    bgPrimary: string;
    bgSecondary: string;
    bgInfo?: string;
    textColor: string;
    bgprimaryvariant: string;
    textcolorvariant:string;
}

const light = {
    bgPrimary: "#ffffff",
    bgSecondary: "#ff0000",
    bgInfo: "#f5f5f5",
    textColor: "#000000",
    bgprimaryvariant: "#F5F5F5",
    textcolorvariant: "#595959",
}
const dark = {
    bgPrimary: "#240707",
    bgSecondary: "#ff0000",
    textColor: "#ffffff",
    bgprimaryvariant: "#3A2828",
    textcolorvariant: "#CBCBCB",

}

export default function useTheme(){
    const scheme = useColorScheme();
    console.log(scheme);
    if(scheme === "dark"){
        return dark;
    }
    return light;
}