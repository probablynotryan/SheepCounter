import React from "react";
import { Dimensions, Pressable, Text, View, StyleSheet } from "react-native";

// let numbers = [1 ...9];

export default function Calculator(props) {
  return (
    <View style={styles.keypadContainer}>
      <View style={styles.inputField}>
        <Text style={styles.inputText}>{props.inputField}</Text>
      </View>
      {[1, 4, 7].map((row) => (
        <View style={styles.buttonsContainer}>
          {[row, row + 1, row + 2].map((number) => (
            <Pressable
              key={number}
              style={styles.pressable}
              onPress={() => props.addNumber(number)}
            >
              <Text style={styles.pressableText}>{number}</Text>
            </Pressable>
          ))}
        </View>
      ))}
      <View style={styles.buttonsContainer}>
        <Pressable
          key={10}
          style={styles.pressableDelete}
          onPress={() => props.subtractNumber()}
        ></Pressable>
        <Pressable
          key={0}
          style={styles.pressable}
          onPress={() => props.addNumber(0)}
        >
          <Text style={styles.pressableText}>0</Text>
        </Pressable>
        <Pressable
          key={11}
          style={styles.pressableSubmit}
          onPress={() => props.subtractNumber()}
        ></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keypadContainer: {
    flexDirection: "column",
    height: Dimensions.get("window").height / 2,
    top: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputField: {
    width: "85%",
    height: 60,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
  },
  inputText: {
    fontSize: "40",
  },
  buttonsContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pressable: {
    backgroundColor: "blue",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  pressableSubmit: {
    backgroundColor: "green",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  pressableDelete: {
    backgroundColor: "red",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  pressableText: {
    fontSize: 38,
    textAlign: "center",
    alignItems: "center",
    top: 11,
    color: "white",
  },
});
