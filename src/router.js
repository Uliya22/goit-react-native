import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegistrationScreen from "./screens/authScreens/RegistrationScreen";
import LoginScreen from "./screens/authScreens/LoginScreen";
import HomeScreen from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function useRoute(isAuth) {
  if (!isAuth) {
    return (
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Registration"
          component={RegistrationScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    );
  }
}
