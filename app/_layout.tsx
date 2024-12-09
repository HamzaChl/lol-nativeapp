// app/_layout.tsx
import { Tabs } from "expo-router";
import { StyleSheet } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DataProvider } from "../context/DataContext"; // Chemin vers votre fichier DataContext.ts

const RootLayout = () => {
  return (
    <DataProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: "#C19D4D",
          tabBarInactiveTintColor: "#545458",
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={34} color={color} />
            ),
            headerTitle: "Home",
          }}
        />
        <Tabs.Screen
          name="characters/index"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="users" size={28} color={color} />
            ),
            headerTitle: "Champions",
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={26} color={color} />
            ),
            headerTitle: "Favorieten",
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user" size={34} color={color} />
            ),
            headerTitle: "Profiel",
          }}
        />
      </Tabs>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#030D16",
    borderTopWidth: 1,
    borderTopColor: "#545458",
    paddingBottom: 20,
    paddingTop: 20,
    height: 110,
  },
});

export default RootLayout;
