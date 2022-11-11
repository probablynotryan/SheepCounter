import React, { componentWillMount, useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Sheep(props) {
  const translationX = useRef(new Animated.Value(0)).current;
  const translationY = useRef(new Animated.Value(0)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;

  let sheepAirborne =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0Kav3oeX79EJoNMEsHaUOHGLn79t9QOZaQ&usqp=CAU";

  useEffect(() => {
    if (props.stepsToDeath) {
      jumpIn();
    } else {
      translationX.setValue(-200);
      translationY.setValue(200);
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
      toValue: -200,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationY, {
      toValue: 200,
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
      toValue: -400,
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
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback>
      <Animated.View
        style={{
          position: "absolute",
          opacity: fadeAnim,
          left: 340,
          top: 140,
          width: 90,
          height: 90,
          alignItems: "center",
          transform: [
            { translateX: translationX },
            { translateY: translationY },
          ],
        }}
      >
        <Image
          source={{
            uri: sheepAirborne,
          }}
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
