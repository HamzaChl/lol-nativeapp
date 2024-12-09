import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useData } from "@/context/DataContext";

const DetailsPage = () => {
  const { id } = useLocalSearchParams();
  const { data } = useData();

  const champion = data?.find((champion) => champion.id === Number(id));

  if (!champion) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Champion niet gevonden</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{champion.name}</Text>
      <Text style={styles.title}>{champion.title}</Text>
      <Image source={{ uri: champion.image.loading }} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
  },
  name: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: "#AAA",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 600,
    resizeMode: "contain",
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    color: "#EEE6D4",
  },
});

export default DetailsPage;
