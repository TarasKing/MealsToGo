import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { spacing, layout, fontSizes } from "../utils/sizes";

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.searchField}>Search feature</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: layout.search,
    backgroundColor: "red",
    minWidth: "100%",
    justifyContent: "center",
    paddingStart: spacing.sm,
    paddingEnd: spacing.sm,
  },
  searchField: {
    fontSize: fontSizes.lg,
  },
});
