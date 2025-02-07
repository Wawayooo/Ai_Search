import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import MyComponent from "./comp/StartPage";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <MyComponent />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
});

export default App;
