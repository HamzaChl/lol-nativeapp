import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useData } from "../../context/DataContext";

const ChampionDetails = () => {
  const { id } = useLocalSearchParams(); // Récupère l'ID depuis l'URL
  const { data } = useData();
  const champion = data?.find((champion) => champion.id.toString() === id);

  if (!champion) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Champion not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: champion.image.loading }} style={styles.image} />
      <Text style={styles.name}>{champion.name}</Text>
      <Text style={styles.title}>{champion.title}</Text>
      {/* Vérifiez que la propriété description existe avant de l'utiliser */}
      {champion.blurb && (
        <Text style={styles.description}>{champion.blurb}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#030D16",
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C19D4D",
  },
  title: {
    fontSize: 18,
    color: "#EEE6D4",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#EEE6D4",
  },
  errorText: {
    fontSize: 18,
    color: "#C19D4D",
    textAlign: "center",
  },
});

export default ChampionDetails;
