import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { spacing, layout } from "../utils/sizes";
import { Searchbar } from "react-native-paper";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: layout.search,
    minWidth: "100%",
    justifyContent: "center",
    paddingStart: spacing.sm,
    paddingEnd: spacing.sm,
  },
});
