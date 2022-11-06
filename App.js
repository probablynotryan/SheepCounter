import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, TabBarIOS} from 'react-native';
import StartupScreen from './StartupScreen';
import AppScreen from './AppScreen';

let CurrentComponent = StartupScreen;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentWindow: 'Welcome Screen'
    }
  }
  componentDidMount() {
    setTimeout(() => {
      CurrentComponent = AppScreen;
      this.setState(
        {currentWindow: 'Main Window'}
      )
    }, 3500)
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <CurrentComponent />
      </View>
  
    );
  }
}