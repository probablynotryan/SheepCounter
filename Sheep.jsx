import React, { useEffect, useRef, useState } from "react";
import {
  Dimensions,
  Image,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Sheep(props) {
  const translationX = useRef(new Animated.Value(0)).current;
  const translationY = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    console.log(Dimensions.get("window").height);
    if (props.stepsToDeath) {
      jumpIn();
    } else {
      translationX.setValue(-(Dimensions.get("window").width / 2 + 45));
      translationY.setValue(Dimensions.get("window").height / 4 - 90);
      fadeAnim.setValue(1);
      console.log(props.stepsToDeath);
      jumpOut();
      setTimeout(() => {
        props.addNewStep();
        console.log("back on");
      }, 1500);
    }
  }, []);

  const jumpIn = () => {
    Animated.timing(translationX, {
      toValue: -(Dimensions.get("window").width / 2 + 45),
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationY, {
      toValue: Dimensions.get("window").height / 4 - 90,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  };

  const jumpOut = () => {
    Animated.timing(translationX, {
      toValue: -(Dimensions.get("window").width + 120),
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationY, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1800,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback>
      <Animated.View
        style={{
          position: "absolute",
          opacity: fadeAnim,
          top: Dimensions.get("screen").height / 4,
          left: Dimensions.get("window").width,
          width: 90,
          height: 90,
          backgroundColor: "white",
          alignItems: "center",
          transform: [
            { translateX: translationX },
            { translateY: translationY },
          ],
        }}
      >
        <Image
          source={require("./assets/cutesheep.png")}
          style={styles.sheep}
        />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  sheepContainer: {
    alignItems: "flex-end",
  },
  sheep: {
    position: "absolute",
    width: 90,
    height: 90,
    alignItems: "center",
  },
});
