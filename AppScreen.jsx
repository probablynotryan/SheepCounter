import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native"

function MainScreen() {
  return ( 
      <ImageBackground style={styles.image} source={require('./assets/test-background.png')} resizeMode="cover">
        <Pressable style={styles.button} onPress={() => console.log('test')}> 
          <Text>Testing</Text>
        </Pressable>
      </ImageBackground>
   );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: "center"
  },
  button: {
    height: 30,
    position: 'absolute',
    left: 20,
    width: 30,
    backgroundColor: "blue",
    color: 'blue'
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});

export default MainScreen;