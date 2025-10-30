import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const { width, height } = Dimensions.get("window");

export default function Splash() {
  return (
    <LinearGradient
      colors={["#10579B", "#3AA4C8"]}
      style={styles.container}
    >
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
});
