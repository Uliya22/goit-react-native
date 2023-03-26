import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function ProfileScreen() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.sectionTitle}>Profile</Text>
          <TouchableOpacity style={styles.container}>
            <Image source={require("../images/arrow-left.png")} />
          </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#ffffff",
  },
  header: {
    width: "100%",
    height: 44,
    flexDirection: "row",
    marginTop: 44,
    paddingVertical: 11,
    justifyContent: "center",
    borderBottomColor: "rgba(0, 0, 0, 0.3)",
    borderBottomWidth: 1,
  },
  container: {
    position: "absolute",
    top: 10,
    left: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: "roboto-medium",
  },
});