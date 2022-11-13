import React from "react";
import { Dimensions, Pressable, Text, View, StyleSheet } from "react-native";

// let numbers = [1 ...9];

export default function Calculator(props) {
  return (
    <View style={styles.keypadContainer}>
      <View style={styles.inputField}>
        <Text style={styles.inputText}>{props.inputField}</Text>
      </View>
      {[1, 4, 7].map(
        (
          row // New rows at 1, 4, and 7
        ) => (
          <View key={111 * row} style={styles.buttonsContainer}>
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
        )
      )}
      <View style={styles.buttonsContainer}>
        <Pressable
          key={10}
          style={[styles.pressable, styles.pressableDelete]}
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
          style={[styles.pressable, styles.pressableSubmit]}
          onPress={() => props.checkNumber()}
        ></Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  keypadContainer: {
    paddingTop: 40,
    flexDirection: "column",
    height: Dimensions.get("window").height / 2,
    top: Dimensions.get("window").height / 4,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  inputField: {
    width: "75%",
    height: 50,
    borderRadius: 55,
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "lightgray",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    top: -20,
  },
  inputText: {
    fontSize: "40",
  },
  buttonsContainer: {
    top: -20,
    height: "15%",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  pressable: {
    backgroundColor: "lightgray",
    width: "17%",
    height: "100%",
    borderRadius: 800,
    borderColor: "gray",
    borderWidth: 1,
  },
  pressableSubmit: {
    backgroundColor: "lightblue",
  },
  pressableDelete: {
    backgroundColor: "red",
  },
  pressableText: {
    top: 6,
    fontSize: 38,
    textAlign: "center",
    alignItems: "center",
    color: "black",
  },
});
