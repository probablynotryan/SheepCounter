import { View, Text, Pressable, StyleSheet, ImageBackground } from "react-native"

function MainScreen() {
  return ( 
      <ImageBackground style={styles.image} source={require('./assets/test-background.png')} resizeMode="cover">
        <Pressable style={styles.circleOne} onPress={() => console.log('1')}> 
          <Text style={styles.text}> 1 </Text>
        </Pressable>
        <Pressable style={styles.circleTwo} onPress={() => console.log('2')}> 
          <Text style={styles.text}> 2 </Text>
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
  circleOne: {
    left: 50,
    top: 100,
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: "blue"
  },
  circleTwo: {
    left: 150,
    top: 30,
    width: 70,
    height: 70,
    borderRadius: 70/2,
    backgroundColor: "blue"
  },
  text: {
    color: "white",
    fontSize: 32,
    lineHeight: 84,
    textAlign: "center",
    left: -4,
    top: -6
  }
});

export default MainScreen;