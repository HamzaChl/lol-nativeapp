import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
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
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: champion.image.full }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{champion.name}</Text>
        <Text style={styles.title}>{champion.title}</Text>
        {champion.blurb && (
          <Text style={styles.description}>{champion.blurb}</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 10,
  },
  header: {
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    resizeMode: "cover",
  },
  textContainer: {
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C19D4D",
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    color: "#1E1E1E",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#939393",
  },
  errorText: {
    fontSize: 18,
    color: "#C19D4D",
    textAlign: "center",
  },
});

export default ChampionDetails;
