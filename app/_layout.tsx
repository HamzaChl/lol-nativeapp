import { Stack } from "expo-router";
import TopNav from "./TopNav"; // Assurez-vous du bon chemin
import BottomNav from "./BottomNav"; // Assurez-vous du bon chemin

export default function Layout() {
  return (
    <>
      <TopNav />
      <Stack />
      <BottomNav />
    </>
  );
}
