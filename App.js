import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from "react-native";

import Home from "./src/screens/Home";
import LifeHack from "./src/screens/LifeHack";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Лайфхаки"
          component={Home}
          options={{
            headerTitleAlign: "center",
            cardStyle: { backgroundColor: "#fff" },
          }}
        />
        <Stack.Screen
          name="Вернуться"
          component={LifeHack}
          options={{
            cardStyle: { backgroundColor: "#fff" },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
