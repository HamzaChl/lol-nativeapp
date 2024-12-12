import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Champion } from "@/types/types";

interface NewsItem {
  newsImg: string;
  newsTitle: string;
  newsSubTitle: string;
  newsDate: string;
}

interface DataContextType {
  data: Champion[] | null;
  setData: React.Dispatch<React.SetStateAction<Champion[] | null>>;
  favorites: number[];
  toggleFavorite: (id: number) => void;
  news: NewsItem[] | null;
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
  const [news, setNews] = useState<NewsItem[] | null>(null);

  useEffect(() => {
    fetch("https://sampleapis.assimilate.be/lol/champions")
      .then((response) => response.json())
      .then((data: Champion[]) => setData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/HamzaChl/lol-nativejson/refs/heads/main/news.json"
    )
      .then((response) => response.json())
      .then((data) => setNews(data))
      .catch((error) => console.error("Error loading news data:", error));
  }, []);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem("favorites");
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
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
      console.error("Error updating favorites:", error);
    }
  };

  return (
    <DataContext.Provider
      value={{ data, setData, favorites, toggleFavorite, news }}
    >
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
