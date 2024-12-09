import { Text, View, StyleSheet, ImageBackground } from "react-native";

const Index = () => {
  return (
    <ImageBackground
      source={require("../assets/images/background2.png")}
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
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgroundImage: {
    flex: 1, // Remplir tout l'espace disponible
    width: "100%", // Largeur ajustée à l'écran
    height: "100%", // Hauteur ajustée à l'écran
  },
});

export default Index;
