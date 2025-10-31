import React, { useEffect } from "react";
import { View, Image, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient"; // or "expo-linear-gradient"
import { useAuth } from "../../contexts/AuthProvider";
import { useTheme } from "../../contexts/ThemeProvider";

const { width, height } = Dimensions.get("window");


export default function Splash({ navigation }: { navigation: any }) {
  const { isLoading, user } = useAuth();
  const { colors } = useTheme();
  useEffect(() => {
    if (!isLoading && user) {
      console.log("User found:", user);
      navigation.reset({
        index: 0,
        routes: [
          {
            name: "Main",
            params: {
              screen: "HomeTab",
            },
          },
        ],
      });
    }
  }, [isLoading, user]);

  return (
    <View style={{ flex: 1 }}>
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

        {isLoading && (
          <View style={styles.spinnerOverlay}>
            <ActivityIndicator size="large" color={colors.error} />
          </View>
        )}
      </LinearGradient>
    </View>
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
    bottom: 30,
    width,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.25)",
  },
});
