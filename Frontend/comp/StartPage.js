import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Dimensions,
  Image,
} from "react-native";
import SearchComponent from "./Ai_Search";

const { width, height } = Dimensions.get("window");

const HomeScreen = ({ navigation }) => {
  const animation = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(animation, { toValue: 0.8, useNativeDriver: true }).start();
  };

  const handlePressOut = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = { transform: [{ scale: animation }] };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/pics/What.png")}
        style={styles.img_background}
      >
        <Image
          source={require("../assets/pics/Mee.png")}
          style={styles.img_bg}
        ></Image>
        <Animated.View style={[styles.animatedButton, animatedStyle]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("HOMEPAGE")}
            activeOpacity={1}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}
          >
            <Text style={styles.buttonText}>GET STARTED</Text>
          </TouchableOpacity>
        </Animated.View>
      </ImageBackground>
    </View>
  );
};

const Stack = createStackNavigator();

const MyComponent = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WELCOME USER">
        <Stack.Screen name="WELCOME USER" component={HomeScreen} />
        <Stack.Screen name="HOMEPAGE" component={SearchComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#00bbf0",
    padding: 10,
    borderRadius: 50,
    width: "100%",
  },
});

export default MyComponent;
