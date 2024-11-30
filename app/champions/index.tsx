import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import { Link } from "expo-router";
import Champion from "../Champion";
import { ChampionProps } from "../../types";

const Champions = () => {
  const [champions, setChampions] = useState<ChampionProps[]>([]);

  async function loadData() {
    try {
      const response = await fetch(
        "https://sampleapis.assimilate.be/lol/champions"
      );
      const data: ChampionProps[] = await response.json();
      setChampions(data);
    } catch (error) {
      console.error("Failed to load champions:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={champions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Link href={`/champions/${item.id}`} style={styles.link}>
            <Champion champion={item} />
          </Link>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#15161B",
  },
  list: {
    padding: 20,
  },
  link: {
    textDecorationLine: "none",
  },
});

export default Champions;
