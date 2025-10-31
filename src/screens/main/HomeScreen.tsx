import { StatusBar, StyleSheet, Text, View } from "react-native";
import { useTheme } from "../../contexts/ThemeProvider";
import { SafeAreaView } from "react-native-safe-area-context";

export function HomeMainScreen({ navigation }: { navigation: any }) {
  const { colors } = useTheme()
  return (
    <View style={[styles.center, { backgroundColor: colors.background }]}>
      <StatusBar
        barStyle="dark-content"
      />
      <Text style={{ fontSize: 22 }}>Home (Main)</Text>
      {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> */}
    </View>
  );
}



const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});