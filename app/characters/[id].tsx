import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useData } from "../../context/DataContext";

const ChampionDetails = () => {
  const { id } = useLocalSearchParams();
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
        <Image
          source={{ uri: champion.image.loading }}
          style={styles.bannerImage}
        />
        <Text style={styles.name}>{champion.name}</Text>
        <Text style={styles.title}>{champion.title}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{champion.blurb}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Roles</Text>
        <View style={styles.tagsContainer}>
          {champion.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attributes</Text>
        <View style={styles.attributesContainer}>
          <Text style={styles.attribute}>Attack: {champion.info.attack}</Text>
          <Text style={styles.attribute}>Defense: {champion.info.defense}</Text>
          <Text style={styles.attribute}>Magic: {champion.info.magic}</Text>
          <Text style={styles.attribute}>
            Difficulty: {champion.info.difficulty}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Base Stats</Text>
        <View style={styles.statsContainer}>
          {Object.entries(champion.stats).map(([key, value]) => (
            <View key={key} style={styles.statRow}>
              <Text style={styles.statKey}>
                {key.replace(/([a-z])([A-Z])/g, "$1 $2").toUpperCase()}
              </Text>
              <Text style={styles.statValue}>{value}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "",
    padding: 30,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  bannerImage: {
    width: "100%",
    height: 600,
    borderRadius: 15,
    marginBottom: 10,
    resizeMode: "cover",
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#C19D4D",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "BeaufortforLOL-Bold",
  },
  title: {
    fontSize: 18,
    color: "#EDE6D4",
    textAlign: "center",
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: "#0F1922",
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#C19D4D",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#EDE6D4",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#C19D4D",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  tagText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  attributesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  attribute: {
    fontSize: 16,
    color: "#EDE6D4",
    marginBottom: 5,
    width: "48%",
  },
  statsContainer: {
    flexDirection: "column",
  },
  statRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
  },
  statKey: {
    color: "#C19D4D",
    fontSize: 14,
    fontWeight: "bold",
  },
  statValue: {
    color: "#EDE6D4",
    fontSize: 14,
  },
  errorText: {
    fontSize: 18,
    color: "#C19D4D",
    textAlign: "center",
  },
});

export default ChampionDetails;
