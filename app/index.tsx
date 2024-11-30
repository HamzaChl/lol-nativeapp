import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://cdn.prod.website-files.com/5c1bb997cb1dd611a0e6c8ce/61bc0289fafdb95863e91d27_WestStudio_LOL_Splash_0158.jpg",
        }}
        style={{ width: 400, height: 400, borderRadius: 10, marginTop: 40 }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#15161B",
    alignItems: "center",
  },
});

export default Home;
