import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Pelicula } from "./componentes/pelicula";

export default function App() {
  const [text, setText] = React.useState("Busque una peli...");
  const [respuesta, setRespuesta] = React.useState(null);

  const dataUrl = "http://www.omdbapi.com/?apikey=b951133f";

  function handleChange(newText) {
    setText(newText);
  }

  async function buscarPeli(titulo) {
    try {
      setRespuesta("");
      const url = `${dataUrl}&t=${titulo}`;
      const response = await fetch(url);
      const data = await response.json(); // extract JSON from response
      console.log(data);
      setRespuesta(data);
    } catch (error) {
      console.log("Error fetching data: ", error);
      setRespuesta(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Movie finder 🎬</Text>
        <View style={styles.tareaInput}>
          <TextInput
            style={styles.input}
            value={text}
            onChangeText={handleChange}
          />
          <View style={styles.boton}>
            <Button
              title="Buscar"
              color="white"
              onPress={() => {
                buscarPeli(text);
              }}
            />
          </View>
        </View>
        {respuesta ? (
          <ScrollView
            style={styles.scroll}
            showsVerticalScrollIndicator={false}
          >
            <Pelicula
              titulo={respuesta.Title}
              descripcion={respuesta.Plot}
              foto={respuesta.Poster}
            />
          </ScrollView>
        ) : (
          <Text style={styles.inicio}></Text>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 25,
    padding: 15,
  },
  title: {
    fontSize: 45,
    textAlign: "left",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1.5,
    width: "60%",
    height: 50,
    borderRadius: 12,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    padding: 10,
  },
  tareaInput: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
  },
  boton: {
    borderWidth: 1.5,
    width: 100,
    height: 50,
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    borderLeftWidth: 0,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  scroll: {
    flexGrow: 1,
    marginTop: 20,
    borderWidth: 1.5,
    borderRadius: 12,
    width: "90%",
  },
  inicio: {
    marginTop: 50,
    fontSize: 20,
  },
});
