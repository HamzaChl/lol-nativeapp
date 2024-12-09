import { Text, View, StyleSheet, ImageBackground } from "react-native";

const Index = () => {
  return (
    <ImageBackground
      source={require("../assets/images/dark-illustration.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.Container}>
        <Text style={{ color: "white" }}>Home...</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Index;
