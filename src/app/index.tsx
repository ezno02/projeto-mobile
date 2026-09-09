import { Text, View, StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import axios from 'axios'
import { getPokemons, funcaoExportarPokemons } from "./getPokemons";

export default function Index() {
  const [pokemons, setPokemons] = useState([])



  useEffect (() => {
    funcaoExportarPokemons()
    // getPokemons(1)
  }, [])
  return (
    <View style={styles.container}>
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
