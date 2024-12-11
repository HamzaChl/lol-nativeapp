import React from "react";
import { Link, router } from "expo-router";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";

const classes = [
  { name: "Tank", icon: require("../assets/images/icons/tank.webp") },
  { name: "Mage", icon: require("../assets/images/icons/mage.webp") },
  {
    name: "Controller",
    icon: require("../assets/images/icons/controller.webp"),
  },
  { name: "Marksman", icon: require("../assets/images/icons/marksman.webp") },
  { name: "Slayer", icon: require("../assets/images/icons/slayer.webp") },
  { name: "Fighter", icon: require("../assets/images/icons/fighter.webp") },
];

const Index = () => {
  const handlePress = () => {
    router.push(`/characters`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homeContainer}>
          <Image
            source={require("@/assets/images/home.jpg")}
            style={styles.homeImage}
          />
          <View style={styles.classes}>
            {classes.map((classItem) => (
              <Link
                key={classItem.name}
                href={`/characters?class=${classItem.name}`}
                asChild
              >
                <TouchableOpacity style={styles.classIcon}>
                  <Image
                    source={classItem.icon}
                    style={styles.iconImage}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </Link>
            ))}
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subTitle}>CHOOSE YOUR</Text>
            <Text style={[styles.title, { fontFamily: "BeaufortforLOL-Bold" }]}>
              CHAMPION
            </Text>
            <Text style={styles.corpseText}>
              Whether you like to dive straight into the fray, support your
              teammates, or something in between, there’s a spot for you on the
              Rift.
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handlePress()}
            >
              <View>
                <Text
                  style={[
                    styles.buttonText,
                    { fontFamily: "BeaufortforLOL-Bold" },
                  ]}
                >
                  Discover More Champions
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <Text style={[styles.title, { fontFamily: "BeaufortforLOL-Bold" }]}>
            Latest news
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  },
  text: {
    fontSize: 23,
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 30,
    marginLeft: 20,
  },
  homeImage: {
    width: "100%",
    height: 300,
    borderRadius: 15,
    resizeMode: "cover",
  },
  homeContainer: {
    paddingHorizontal: 20,
  },
  classes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  classIcon: {
    margin: 5,
    alignItems: "center",
    backgroundColor: "#0F1922",
    width: "30%",
    borderRadius: 10,
    padding: 10,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  title: {
    color: "#C19D4D",
    textAlign: "center",
    fontSize: 40,
    marginBottom: 20,
    marginTop: 10,
    textTransform: "uppercase",
  },
  subTitle: {
    textAlign: "center",
    fontSize: 17,
  },
  textContainer: {
    marginTop: 100,
    textAlign: "center",
  },
  corpseText: {
    textAlign: "center",
    fontSize: 13,
    color: "#939393",
  },
  button: {
    height: 70,
    backgroundColor: "#0F1922",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 100,
    borderRadius: 10,
  },
  buttonText: {
    color: "#C19D4D",
    fontSize: 17,
    textTransform: "uppercase",
  },
});

export default Index;
