import { Tabs } from "expo-router";
import { StyleSheet, Image, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { DataProvider } from "../context/DataContext";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [fontsLoaded] = useFonts({
    "BeaufortforLOL-Bold": require("../assets/fonts/BeaufortforLOL-Bold.ttf"),
    "BeaufortforLOL-Medium": require("../assets/fonts/BeaufortforLOL-Medium.ttf"),
  });

  return (
    <DataProvider>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: styles.header,
          headerTitleAlign: "left",
          headerTitle: () => (
            <View style={styles.headerContainer}>
              <Image
                source={require("../assets/images/logo.png")}
                style={styles.headerImage}
              />
              <FontAwesome name="bell" size={24} color="#C19D4D" />
            </View>
          ),
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
          }}
        />
        <Tabs.Screen
          name="characters"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="users" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="heart" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="newspaper-o" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle-o" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </DataProvider>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#0F1922",
    borderTopWidth: 2,
    borderTopColor: "#C19D4D",
    paddingBottom: 20,
    paddingTop: 20,
    height: 110,
    zIndex: 10,
  },
  header: {
    height: 130,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    width: "100%",
  },
  headerImage: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
});

export default RootLayout;
