import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { spacing, layout } from "../utils/sizes";

export default function List() {
  return (
    <View style={styles.container}>
      <Text>List feature</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: layout.list,
    backgroundColor: "green",
    minWidth: "100%",
    padding: spacing.sm,
  },
});
