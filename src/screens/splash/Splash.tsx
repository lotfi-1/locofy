import React, { useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // or "expo-linear-gradient"
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../contexts/AuthProvider";

const { width, height } = Dimensions.get("window");


export default function Splash({ navigation }: { navigation: any }) {
  const { isLoading, user } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      console.log("User found:", user);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Main", // Stack screen
            params: {
              screen: "HomeTab", // First Bottom Tab
            },
          },
        ],
      });
    }
  }, [isLoading, user]);

  return (
    <LinearGradient colors={["#10579B", "#3AA4C8"]} style={styles.container}>
      <Image
        source={require("../../assets/images/top_worldmap.png")}
        style={styles.topMap}
        resizeMode="cover"
      />
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/images/bottom_sky.png")}
        style={styles.bottomSky}
        resizeMode="cover"
      />

      {/* Spinner while loading */}
      {isLoading && (
        <View style={styles.spinnerOverlay}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  topMap: {
    position: "absolute",
    top: 0,
    width,
    height: height * 0.35,
    opacity: 0.1,
  },
  logo: {
    width: 287,
    height: 90,
  },
  bottomSky: {
    position: "absolute",
    bottom: 0,
    width,
    height: 252,
  },
  spinnerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});
