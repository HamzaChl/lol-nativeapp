import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link, Tabs } from "expo-router";

const Bottom = () => {
  return (
    <View style={styles.navContainer}>
      <Link href="/" asChild>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/Champions" asChild>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Champions</Text>
        </TouchableOpacity>
      </Link>

      <Link href="/About" asChild>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>About</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const BottomNav = () => {};

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#010a13",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: "#C89B3C",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1000,
    height: 100,
  },
  navButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  navText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default Bottom;
