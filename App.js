import React from "react";
import Sheep from "./Sheep";
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
      stepsToDeath: true,
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

  handleNewStep = () => {
    this.setState((prevState) => {
      return { stepsToDeath: !prevState.stepsToDeath };
    });
  };

  handleCheckNumber = () => {
    this.setState((prevState) => {
      if (parseInt(prevState.inputField) == this.state.currentSheepCount) {
        return {
          stepsToDeath: !prevState.stepsToDeath,
          inputField: "",
          currentSheepCount: prevState.currentSheepCount + 1,
        };
      } else {
        console.log("psst. it's " + prevState.currentSheepCount);
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
          currentSheepCount={this.state.currentSheepCount}
          stepsToDeath={this.state.stepsToDeath}
          addNewStep={this.handleNewStep}
        />
      </View>
    );
  }
}
