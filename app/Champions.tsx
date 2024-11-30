import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Constants from "expo-constants";
import Champion from "./Champion";
import { ChampionProps } from "../types";
import BottomNav from "./BottomNav";
import TopNav from "./TopNav";

const App = () => {
  const [champions, setChampions] = useState<ChampionProps[]>([]);

  async function loadData() {
    try {
      let response = await fetch(
        "https://sampleapis.assimilate.be/lol/champions"
      );
      let data: ChampionProps[] = await response.json();
      setChampions(data);
    } catch (error) {
      console.error("Failed to load champions:", error);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={champions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Champion champion={item} />}
          contentContainerStyle={styles.list}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15161B",
  },
  list: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingBottom: Constants.statusBarHeight + 100,
    padding: 0,
  },
});

export default App;
