import React, { useEffect, useRef } from "react";
import {
  View,
  Image,
  Text,
  Animated,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

export default function Sheep() {
  const translationX = useRef(new Animated.Value(0)).current;
  const translationY = useRef(new Animated.Value(0)).current;
  let sheepAirborne =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS0Kav3oeX79EJoNMEsHaUOHGLn79t9QOZaQ&usqp=CAU";

  useEffect(() => {
    moveIt();
  }, []);

  const moveIt = () => {
    Animated.timing(translationX, {
      toValue: -170,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationY, {
      toValue: 240,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  const onPress = () => {
    Animated.timing(translationX, {
      toValue: -450,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translationY, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };
  // const pitterPatter = () => {
  //   console.log("triggered");
  //   Animated.timing(translationX, {
  //     toValue: 0,
  //     useNativeDriver: true,
  //   }).start();
  //   Animated.timing(translationY, {
  //     toValue: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View
        style={{
          position: "absolute",
          left: 320,
          top: 100,
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
