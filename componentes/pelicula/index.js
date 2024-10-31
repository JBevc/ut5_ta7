import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  Image,
} from "react-native";

export function Pelicula({ titulo, descripcion, foto }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
      <Image style={styles.poster} source={{ uri: foto }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 25,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "left",
  },
  descripcion: {
    marginTop: 15,
    fontSize: 15,
    textAlign: "left",
  },
  poster: {
    height: 450,
    marginTop: 30,
    borderRadius: 10,
  },
});
