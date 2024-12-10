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
      <View style={styles.championCard}>
        <Image
          source={{ uri: item.image.loading }}
          style={styles.championImage}
        />
        <Text style={styles.championName}>{item.name}</Text>
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
        <Text style={styles.title}>Favorites</Text>
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
    flex: 1,
    paddingTop: 50,
    backgroundColor: "#000",
  },
  title: {
    fontSize: 28,
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
  championCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 15,
    padding: 15,
    alignItems: "center",
  },
  championImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  championName: {
    color: "#fff",
    fontSize: 16,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Favorites;
