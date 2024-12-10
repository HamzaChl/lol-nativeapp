import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useData } from "../context/DataContext";
import { router } from "expo-router";

const Favorites = () => {
  const { data, favorites } = useData();

  const favoriteChampions = data?.filter((champion) =>
    favorites.includes(champion.id)
  );

  const handlePress = (id: number) => {
    router.push(`/characters/${id}`);
  };

  const renderItem = ({ item }: { item: any }) => (
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
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../assets/images/dark-illustration.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Favorites</Text>
        <FlatList
          data={favoriteChampions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
  },
  text: {
    fontSize: 38,
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 30,
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
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
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
});

export default Favorites;
