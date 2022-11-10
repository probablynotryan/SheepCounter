import React from "react";
import { Pressable, Text, View, StyleSheet } from "react-native";

// let numbers = [1 ...9];

export default function Calculator(props) {
  return (
    <View style={calculatorStyles.pressableView}>
      <View style={calculatorStyles.inputField}>
        <Text style={calculatorStyles.inputText}>{props.inputField}</Text>
      </View>
      {[...new Array(9).keys()].map((number) => (
        <Pressable
          key={number + 1}
          style={calculatorStyles.pressable}
          onPress={() => props.addNumber(number + 1)}
        >
          <Text style={calculatorStyles.pressableText}>{number + 1}</Text>
        </Pressable>
      ))}
      <Pressable
        key={10}
        style={calculatorStyles.pressableDelete}
        onPress={() => props.subtractNumber()}
      ></Pressable>
      <Pressable
        key={0}
        style={calculatorStyles.pressable}
        onPress={() => props.addNumber(0)}
      >
        <Text style={calculatorStyles.pressableText}>0</Text>
      </Pressable>
      <Pressable
        key={11}
        style={calculatorStyles.pressableSubmit}
        onPress={() => props.subtractNumber()}
      ></Pressable>
    </View>
  );
}

const calculatorStyles = StyleSheet.create({
  inputField: {
    width: "80%",
    height: 60,
    top: -20,
    borderRadius: 20,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    marginBottom: 20,
  },
  pressableView: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    position: "relative",
    top: 490,
    justifyContent: "center",
  },
  pressable: {
    marginRight: 23,
    marginLeft: 25,
    marginBottom: 19,
    backgroundColor: "blue",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  pressableSubmit: {
    marginRight: 23,
    marginLeft: 25,
    marginBottom: 19,
    backgroundColor: "green",
    width: 70,
    height: 70,
    borderRadius: 40,
  },
  pressableDelete: {
    marginRight: 29,
    marginLeft: 25,
    marginBottom: 19,
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
  inputText: {
    fontSize: 40,
  },
});
