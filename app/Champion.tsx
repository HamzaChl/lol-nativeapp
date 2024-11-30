// Champion.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ChampionProps } from "../types";

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
      <View>
        <Text style={styles.name}>{champion.name}</Text>
        <Text style={styles.title}>{champion.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#C89B3C",
    marginLeft: 50,
    marginRight: 30,
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
    color: "#5B5A56",
    marginTop: 10,
  },
  name: {
    fontSize: 17,
    marginTop: 10,
    fontWeight: "bold",
    color: "#c19e4d",
  },
});

export default Champion;
