import { StackActions } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  const handlePress = () => {
    // Navigate to HomeScreen
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/imageHomeScreen.jpeg")}
        style={styles.image}
        resizeMode="cover"
      />
      <TouchableOpacity style={styles.homeScreenButton} onPress={handlePress}>
        <Text style={styles.buttonText}>Start Now!</Text>
      </TouchableOpacity>
      <Text style={styles.forText}>Get ready to explore!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    position: "relative",
  },
  forText: {
    fontSize: 26,
    color: "white",
    position: "absolute",
    bottom: 50,
    fontWeight: "bold",
    fontFamily: "Roboto",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  homeScreenButton: {
    position: "absolute",
    top: 20,
    padding: 10,
    backgroundColor: "#000080",
    borderRadius: 5,
    zIndex: 1,
    marginTop: 100,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});

export default WelcomeScreen;
