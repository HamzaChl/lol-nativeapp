import React from "react";

import { View, StyleSheet, Text } from "react-native";
import Nav from "./Nav";

const About = () => {
  return (
    <View style={styles.container}>
      <Text>About ashu</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default About;
