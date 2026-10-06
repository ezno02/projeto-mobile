import { useEffect, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { styles } from "./style";
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
    <View style={{ flex: 1, backgroundColor: "#1e1857" }}>
      <Text style={{ color: "white", textAlign: "center", fontSize: 30, margin: 10 }}>Pokedex</Text>
      <FlatList
        style={{ flex: 1 }}
        data={pokedex}
        contentContainerStyle={styles.Cards}
        renderItem={({ item }) => (
          <View style={styles.Card}>
            <Image style={styles.img} source={{ uri: item.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"].front_default }} />
            {/* {console.log(item.pokemon_v2_pokemonsprites[0].sprites.other["official-artwork"].front_default)} */}
            <Text style={{ color: "white" }}>{item.name}</Text>
          </ View>
        )}
      />
    </View>

  );
}

