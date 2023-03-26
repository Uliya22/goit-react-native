import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./src/router";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const routing = useRoute(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        await Font.loadAsync({
          "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
          "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}
