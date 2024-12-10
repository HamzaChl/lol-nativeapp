import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Champion } from "@/types/types";

interface DataContextType {
  data: Champion[] | null;
  setData: React.Dispatch<React.SetStateAction<Champion[] | null>>;
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Champion[] | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    fetch("https://sampleapis.assimilate.be/lol/champions")
      .then((response) => response.json())
      .then((data: Champion[]) => setData(data))
      .catch((error) =>
        console.error("Erreur lors du chargement des données:", error)
      );
  }, []);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Erreur lors du chargement des favoris:", error);
      }
    };
    loadFavorites();
  }, []);

  const toggleFavorite = async (id: number) => {
    try {
      let updatedFavorites;
      if (favorites.includes(id)) {
        updatedFavorites = favorites.filter((favId) => favId !== id);
      } else {
        updatedFavorites = [...favorites, id];
      }
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error("Erreur lors de la mise à jour des favoris:", error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, favorites, toggleFavorite }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
