import { useColorScheme } from "react-native";

interface Cores {
  bgPrimary: string;
  bgSecondary: string;
  bgInfo?: string;
  textColor: string;
  bgPrimaryVariant: string; 
  textColorVariant: string;
}

const lightTheme: Cores = {
  bgPrimary: "#ffffff",
  bgSecondary: "#ff0000",
  bgInfo: "#f5f5f5",
  textColor: "#000000",
  bgPrimaryVariant: "#F5F5F5",
  textColorVariant: "#595959",
};

const darkTheme: Cores = {
  bgPrimary: "#240707",
  bgSecondary: "#ff0000",
  textColor: "#ffffff",
  bgPrimaryVariant: "#3A2828",
  textColorVariant: "#CBCBCB",
};

export default function useTheme(): Cores {
  const scheme = useColorScheme();

  return scheme === "dark" ? darkTheme : lightTheme;
}
