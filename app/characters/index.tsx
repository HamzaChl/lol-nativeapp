import React from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useData } from "../../context/DataContext";
import { Champion } from "@/types/types";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const Characters = () => {
  const { data } = useData();
  const router = useRouter();

  if (!data) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#C19D4D" />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    );
  }

  const handlePress = (id: number) => {
    router.push(`/characters/${id}`);
  };

  const renderItem = ({ item }: { item: Champion }) => (
    <TouchableOpacity
      style={styles.championCard}
      onPress={() => handlePress(item.id)}
    >
      <Image
        source={{ uri: item.image.loading }} // Remplacez `loading` par la clé correcte
        style={styles.championImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.championName}>{item.name}</Text>
        <Text style={styles.championTitle}>{item.title}</Text>
      </View>
      <TouchableOpacity style={styles.favoriteIcon}>
        <FontAwesome name="heart-o" size={26} color="#C19D4D" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require("../../assets/images/dark-illustration.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={styles.text}>Champions</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 10,
    color: "#C19D4D",
  },
  championCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#1C1C1E",
    borderRadius: 15,
    overflow: "hidden",
    shadowColor: "C19D4D",
    shadowOffset: { width: 0, height: 4 }, // Ajustez selon vos besoins
    shadowOpacity: 0.3, // Entre 0 et 1
    shadowRadius: 6, // Rayon de flou
    position: "relative",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 15,
    width: 180,
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
    fontSize: 18,
    color: "#EEE6D4",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  championTitle: {
    fontSize: 14,
    color: "#C19D4D",
  },
  favoriteIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
});

export default Characters;
