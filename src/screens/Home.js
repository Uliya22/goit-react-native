import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostScreen";
import ProfileScreen from "./ProfileScreen";

const MainTab = createBottomTabNavigator();

export default function HomeScreen() {
  return (
    <MainTab.Navigator
      screenOptions={{ tabBarShowLabel: false }}
      initialRouteName="Posts"
    >
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: focused ? "#FF6C00" : "#ffffff",
                }}
              >
                <Image source={require("../images/grid.png")} />
              </View>
            );
          },
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: focused ? "#FF6C00" : "#ffffff",
                }}
              >
                <Image source={require("../images/new.png")} />
              </View>
            );
          },
        }}
        name="CreatePosts"
        component={CreatePostScreen}
      />
      <MainTab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            return (
              <View
                style={{
                  width: 70,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: focused ? "#FF6C00" : "#ffffff",
                }}
              >
                <Image source={require("../images/user.png")} />
              </View>
            );
          },
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
