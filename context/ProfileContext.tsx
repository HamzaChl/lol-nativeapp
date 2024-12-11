import React, { createContext, useState, useEffect, ReactNode } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ProfileContextType {
  profileImage: string | null;
  setProfileImage: (uri: string | null) => void;
}

export const ProfileContext = createContext<ProfileContextType | undefined>(
  undefined
);

interface ProfileProviderProps {
  children: ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({
  children,
}) => {
  const [profileImage, setProfileImage] = useState<string | null>(null);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const storedImage = await AsyncStorage.getItem("profileImage");
        if (storedImage) {
          setProfileImage(storedImage);
        }
      } catch (error) {
        console.error("Erreur lors du chargement de l'image du profil:", error);
      }
    };
    loadProfileImage();
  }, []);

  const updateProfileImage = async (uri: string | null) => {
    try {
      if (uri) {
        await AsyncStorage.setItem("profileImage", uri);
      } else {
        await AsyncStorage.removeItem("profileImage");
      }
      setProfileImage(uri);
    } catch (error) {
      console.error(
        "Erreur lors de la mise à jour de l'image du profil:",
        error
      );
    }
  };

  return (
    <ProfileContext.Provider
      value={{ profileImage, setProfileImage: updateProfileImage }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
