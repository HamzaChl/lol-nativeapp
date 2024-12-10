import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { useData } from "../../context/DataContext";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const CLASSES = [
  "All",
  "Tank",
  "Mage",
  "Assassin",
  "Marksman",
  "Support",
  "Fighter",
];

const Characters = () => {
  const { data, toggleFavorite, favorites } = useData();
  const { class: selectedClass } = useLocalSearchParams();
  const [currentClass, setCurrentClass] = useState(
    typeof selectedClass === "string" ? selectedClass : "All"
  );

  const handlePress = (id: number) => {
    router.push(`/characters/${id}`);
  };

  const filteredData =
    currentClass === "All"
      ? data || []
      : (data || []).filter((item) =>
          item.tags?.some(
            (tag) => tag.toLowerCase() === currentClass.toLowerCase()
          )
        );

  const renderItem = ({ item }: { item: any }) => {
    const isFavorite = favorites.includes(item.id);

    return (
      <TouchableOpacity
        style={styles.championCard}
        onPress={() => handlePress(item.id)}
      >
        <Image
          source={{ uri: item.image.loading }}
          style={styles.championImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.championName}>{item.name}</Text>
          <Text style={styles.championTitle}>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.favoriteIcon}
          onPress={() => toggleFavorite(item.id)}
        >
          <FontAwesome
            name={isFavorite ? "heart" : "heart-o"}
            size={26}
            color={isFavorite ? "red" : "#C19D4D"}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "BeaufortforLOL-Bold" }]}>
        CHAMPIONS
      </Text>

      <Text style={styles.text}>Filters</Text>
      <View style={styles.classSelector}>
        {CLASSES.map((className) => (
          <TouchableOpacity
            key={className}
            style={[
              styles.classButton,
              currentClass === className && styles.activeClassButton,
            ]}
            onPress={() => setCurrentClass(className)}
          >
            <Text
              style={[
                styles.classButtonText,
                currentClass === className && styles.activeClassButtonText,
              ]}
            >
              {className}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  text: {
    fontSize: 20,
    color: "#1E1E1E",
    fontWeight: "500",
    marginBottom: 10,
    marginLeft: 20,
  },
  classSelector: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginBottom: 20,
    justifyContent: "flex-start",
  },
  classButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#C19D4D",
    borderRadius: 8,
    margin: 5,
    minWidth: "25%",
    alignItems: "center",
    justifyContent: "center",
  },
  activeClassButton: {
    backgroundColor: "#C19D4D",
    color: "white",
  },
  classButtonText: {
    fontSize: 14,
    color: "#C19D4D",
  },
  activeClassButtonText: {
    color: "#FFFFFF",
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  championCard: {
    margin: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 15,
    overflow: "hidden",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    width: "45%",
    height: 300,
  },
  championImage: {
    width: "130%",
    height: "130%",
    borderRadius: 10,
    marginBottom: 10,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    resizeMode: "cover",
  },
  textContainer: {
    position: "absolute",
    bottom: 15,
    left: 15,
    width: "100%",
    zIndex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    borderRadius: 10,
    padding: 10,
  },
  championName: {
    fontWeight: "bold",
    fontFamily: "BeaufortforLOL-Bold",
    fontSize: 18,
    color: "#C19D4D",
    textAlign: "center",
  },
  championTitle: {
    fontSize: 14,
    color: "#EDE6D4",
    opacity: 0.6,
    textAlign: "center",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    color: "#C19D4D",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20,
  },
});

export default Characters;
