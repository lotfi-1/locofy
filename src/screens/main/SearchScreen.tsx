import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export function SearchScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Search</Text>
      <Text style={{ marginTop: 10 }}>Header shows a back icon — pressing it returns to Home.</Text>
    </SafeAreaView>
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