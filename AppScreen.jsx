import {
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import Calculator from "./Calculator";
import React from "react";

function MainScreen(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("./assets/test-background.png")}
      resizeMode="cover"
    >
      <SafeAreaView>
        <Text style={{ color: "white" }}>Test</Text>
        <Image
          onPress={props.moveBall}
          source={{
            uri: "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/shape_circle.png",
          }}
          style={styles.circle}
        />
      </SafeAreaView>
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
  circle: {
    width: 80,
    height: 80,
  },
});

export default MainScreen;
