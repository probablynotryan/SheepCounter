import React from 'react';
import { Text, View, Image, StyleSheet} from 'react-native';
import ScrollingBackground from 'react-native-scrolling-images';

export default function StartupScreen() {
  return ( 
    <View style={styles.container}>
      <ScrollingBackground
        style={styles.scrollingBackground}
        speed={60}
        direction={"up"}
        images={[require("./assets/sheep.png")]}
        useNativeDriver={true}
      />
      <View style={styles.welcomecircle}>
        <Image style={styles.actualcircle} source={require('./assets/welcomecircle.png')}
        resizeMode='contain' />
      </View>
    </View>
   );   
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%"
  },
  scrollingBackground: {
    backgroundColor: "#0B7483"
  },
  welcomecircle: {
    flex: 1,
    position: "absolute",
    alignItems: "center", 
    justifyContent: "center"
  },
  actualcircle: {
    width: 420
  }
});