import React from "react";
import { View, Animated } from "react-native";
import StartupScreen from "./StartupScreen";
import AppScreen from "./AppScreen";

let CurrentComponent = StartupScreen;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWindow: "Welcome Screen",
      inputField: "0",
      currentSheepCount: 1,
    };
  }

  handleCalculatorAdd = (input) => {
    this.setState((prevState) => {
      if (prevState.inputField.length > 12) return;
      if (prevState.inputField === "0") return { inputField: input.toString() };
      let newNumber = prevState.inputField + input.toString();
      return { inputField: newNumber };
    });
  };

  handleCalculatorDelete = () => {
    this.setState((prevState) => {
      if (prevState.inputField.length > 1) {
        let removeOne = prevState.inputField.substring(1);
        return { inputField: removeOne };
      } else {
        return { inputField: "" };
      }
    });
  };

  handleCheckNumber = () => {
    this.setState((prevState) => {
      if (parseInt(prevState.inputField) == this.state.currentSheepCount) {
        return {
          inputField: "",
          currentSheepCount: prevState.currentSheepCount + 1,
        };
      } else {
        return {
          inputField: "",
        };
      }
    });
  };

  componentDidMount() {
    setTimeout(() => {
      CurrentComponent = AppScreen;
      this.setState({ currentWindow: "Main Window" });
    }, 3500);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CurrentComponent
          inputField={this.state.inputField}
          addNumber={this.handleCalculatorAdd}
          subtractNumber={this.handleCalculatorDelete}
          checkNumber={this.handleCheckNumber}
        />
      </View>
    );
  }
}
