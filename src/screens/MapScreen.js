import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function MapScreen() {
  return (
    <View style={styles.cotainer}>
      <Text>MapScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});