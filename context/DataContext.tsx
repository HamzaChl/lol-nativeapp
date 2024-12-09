import { Champion } from "@/types/types";
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface DataContextType {
  data: Champion[] | null; // Utilisation de Champion[] pour un tableau de champions
  setData: React.Dispatch<React.SetStateAction<Champion[] | null>>;
}

// Création du contexte avec un type générique
export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

interface DataProviderProps {
  children: ReactNode; // Typage explicite de `children`
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [data, setData] = useState<Champion[] | null>(null);

  useEffect(() => {
    fetch("https://sampleapis.assimilate.be/lol/champions")
      .then((response) => response.json())
      .then((data: Champion[]) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
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
