// Champion.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ChampionProps } from "./types";

interface ChampionComponentProps {
  champion: ChampionProps;
}

const Champion: React.FC<ChampionComponentProps> = ({ champion }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: champion.image.full }} // URL de l'image
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.name}>{champion.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    backgroundColor: "#010a13",
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
    color: "#c19e4d",
  },
});

export default Champion;
