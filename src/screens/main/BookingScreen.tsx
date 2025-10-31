import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export function BookingScreen() {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Booking</Text>
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