import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Cards from "./components/Cards";
import { fetchPokemons } from "./getPokemons";

export default function Index() {
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    async function carregarPokemons() {
      const pokemons = await fetchPokemons();
      setPokedex(pokemons);
      // console.log(pokemons)
    }

    carregarPokemons();

  }, [])
  return (
    <FlatList
      data={pokedex}
      renderItem={({ pokemon }) => (
        <View>
          <Text>{pokemon.name}</Text>
        </ View>
      )}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
