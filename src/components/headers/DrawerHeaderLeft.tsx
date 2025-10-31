import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useTheme } from "../../contexts/ThemeProvider";
import { StyleSheet, TouchableOpacity } from "react-native";
import { ListSvg } from "../../assets";

export default function DrawerHeaderLeft() {
  const { colors } = useTheme();
  const navigation = useNavigation<DrawerNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
    >
      <ListSvg stroke={colors.text.primary} />
    </TouchableOpacity>
  );
}