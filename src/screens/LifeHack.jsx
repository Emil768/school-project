import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Platform } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

//lib
import axios from "react-native-axios";
import { lifeHacks } from "../../public/db.json";
//

function LifeHack({ route, navigation }) {
  const { itemId } = route.params;
  console.log(itemId);
  console.log(lifeHacks[itemId - 1]);
  const { title, text, img } = lifeHacks[itemId - 1];
  console.log(img);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: img }} style={styles.img} resizeMode="center" />
      <Text style={styles.text}>
        {"\t"}
        {text}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    maxWidth: Dimensions.get("window").width,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    lineHeight: 23,
    textAlign: "justify",
  },
  img: {
    maxWidth: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default LifeHack;
