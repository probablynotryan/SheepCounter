import React from "react";
import { Dimensions, Text, View, Image, StyleSheet } from "react-native";
import ScrollingBackground from "react-native-scrolling-images";

export default function StartupScreen() {
  return (
    <View style={styles.container}>
      <ScrollingBackground
        style={styles.scrollingBackground}
        speed={60}
        direction={"up"}
        images={[require("./assets/sheep.png")]}
        useNativeDriver={true}
      />
      <View style={styles.welcomecircle}>
        <Image
          style={styles.actualcircle}
          source={require("./assets/welcomecircle.png")}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollingBackground: {
    backgroundColor: "#0B7483",
  },
  welcomecircle: {
    position: "absolute",
  },
  actualcircle: {
    width: Dimensions.get("window").width,
  },
});
