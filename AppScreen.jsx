import { StyleSheet, ImageBackground } from "react-native";
import Calculator from "./Calculator";
import React from "react";

function MainScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("./assets/test-background.png")}
      resizeMode="cover"
    >
      <Calculator
        inputField={props.inputField}
        addNumber={props.addNumber}
        subtractNumber={props.subtractNumber}
      ></Calculator>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default MainScreen;
