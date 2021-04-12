import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text>Home screen!!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
