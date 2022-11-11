import { Text, StyleSheet, ImageBackground } from "react-native";
import Calculator from "./Calculator";
import Sheep from "./Sheep";
import React from "react";

function MainScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("./assets/test-background.png")}
      resizeMode="cover"
    >
      <Sheep
        key={props.stepsToDeath}
        addNewStep={props.addNewStep}
        stepsToDeath={props.stepsToDeath}
        currentSheepCount={props.currentSheepCount}
        checkNumber={props.checkNumber}
      />
      <Calculator
        inputField={props.inputField}
        addNumber={props.addNumber}
        subtractNumber={props.subtractNumber}
        checkNumber={props.checkNumber}
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
