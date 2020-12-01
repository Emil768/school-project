import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { lifeHacks } from "../../public/db.json";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ paddingTop: 10, backgroundColor: "#fff" }}
        data={lifeHacks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Вернуться", {
                itemId: item.id,
              })
            }
          >
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 16,
    fontFamily: "Roboto",
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#c4c4c4",
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Home;
