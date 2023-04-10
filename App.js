import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView, StatusBar } from "react-native";
import Search from "./src/features/Search";
import List from "./src/features/List";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Search />
        <List />
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    flex: 0.1,
    backgroundColor: "red",
    color: "white",
  },
  listContainer: {
    flex: 0.9,
    backgroundColor: "blue",
  },
});
