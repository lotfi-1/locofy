import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../contexts/ThemeProvider";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ArrowLeftSvg } from "../../assets";

export default function BackToHomeHeader() {
  const { colors } = useTheme();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('HomeTab')}
    >
      <ArrowLeftSvg stroke={colors.text.primary} />
    </TouchableOpacity>
  );
}


