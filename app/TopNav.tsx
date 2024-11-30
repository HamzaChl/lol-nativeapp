import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Link, Tabs } from "expo-router";
import Constants from "expo-constants";

const TopNav = () => {
  return (
    <View style={styles.navContainer}>
      <Image
        style={{ width: 150, height: 50, marginTop: 10 }}
        source={{
          uri: "https://1000logos.net/wp-content/uploads/2020/09/League-of-Legends-Logo.png",
        }}
      />
    </View>
  );
};

const BottomNav = () => {};

const styles = StyleSheet.create({
  navContainer: {
    paddingTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#16171C",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#C89B3C",
    position: "absolute",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
});

export default TopNav;
