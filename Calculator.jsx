import React from "react";
import { Pressable, Text, View, StyleSheet} from "react-native";

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function Calculator(props) {
  return ( 
      <View style={calculatorStyles.pressableView}>
        <View style={calculatorStyles.inputField}>
        <Text style={calculatorStyles.inputText}>
          {props.inputField}
        </Text>
        </View>
        {numbers.map((number) => 
        <Pressable key={number} style={calculatorStyles.pressable} onPress={() => props.addNumber(number)}>
          <Text style={calculatorStyles.pressableText}>{number}</Text>
        </Pressable>
        )}
        <Pressable key={10} style={calculatorStyles.pressable} onPress={() => props.subtractNumber()}>
        <Text>D</Text>
        </Pressable>
      </View>
   );
}

const calculatorStyles = StyleSheet.create({
  inputField: {
    width: '80%',
    height: 60,
    top: -20,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginBottom: 20
  },
  pressableView: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: 'relative',
    top: 350,
    justifyContent: 'center'
  },
  pressable: {
    margin: 17,
    backgroundColor: 'blue',
    width: 80,
    height: 80,
    borderRadius: 40
  },
  pressableText: {
    fontSize: 50,
    textAlign: 'center',
    alignItems: 'center',
    top: 8,
    color: 'white'
  },
  inputText: {
    fontSize: 40,
  }
});