import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ProfileContext } from "../context/ProfileContext"; // Assurez-vous que le chemin est correct

const Profile = () => {
  const profileContext = useContext(ProfileContext);

  if (!profileContext) {
    throw new Error("Profile must be used within a ProfileProvider");
  }

  const { profileImage, setProfileImage } = profileContext;

  const handleChoosePhoto = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission refused",
        "You must authorize access to the library to import images."
      );
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const uri = result.assets[0].uri;
      await setProfileImage(uri);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        {profileImage ? (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        ) : (
          <View style={styles.placeholderImage}>
            <Text style={styles.placeholderText}>Photo</Text>
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
          <Text
            style={[styles.buttonText, { fontFamily: "BeaufortforLOL-Bold" }]}
          >
            Import a photo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  profileContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  placeholderImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  placeholderText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#0F1922",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#C19D4D",
    fontSize: 17,
    textTransform: "uppercase",
  },
});

export default Profile;
