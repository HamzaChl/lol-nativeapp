import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

const News = () => {
  const [newsData, setNewsData] = useState<any[]>([]);

  // Récupérer les données JSON depuis GitHub
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HamzaChl/lol-nativejson/refs/heads/main/news.json"
    )
      .then((response) => response.json())
      .then((data) => setNewsData(data))
      .catch((error) => console.error("Error fetching news data:", error));
  }, []);

  // Fonction pour rendre chaque carte de news
  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.newsImg }} style={styles.newsImage} />
      <View style={styles.cardContent}>
        <Text style={styles.newsTitle}>{item.newsTitle}</Text>
        <Text style={styles.newsSubTitle}>{item.newsSubTitle}</Text>
        <Text style={styles.newsDate}>{item.newsDate}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { fontFamily: "BeaufortforLOL-Bold" }]}>
        NEWS
      </Text>
      <FlatList
        data={newsData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.newsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: "#f4f4f4",
  },
  title: {
    color: "#C19D4D",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 40,
  },
  newsList: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: "#fff",
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  newsImage: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
  cardContent: {
    padding: 15,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  newsSubTitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 10,
  },
  newsDate: {
    fontSize: 12,
    color: "#aaa",
  },
});

export default News;
