import { Button, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export function HomeMainScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Home (Main)</Text>
      {/* <Button title="Open Drawer" onPress={() => navigation.openDrawer()} /> */}
    </SafeAreaView>
  );
}


export function DrawerItemA({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 20 }}>Drawer Item A</Text>
      <Button title="Go to Home Main" onPress={() => navigation.navigate('HomeMain')} />
    </SafeAreaView>
  );
}


export function BookingScreen() {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Booking</Text>
    </SafeAreaView>
  );
}




export function SearchScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Search</Text>
      <Text style={{ marginTop: 10 }}>Header shows a back icon — pressing it returns to Home.</Text>
    </SafeAreaView>
  );
}


export function ProfileScreen({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.center}>
      <Text style={{ fontSize: 22 }}>Profile</Text>
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