import { View, Text, FlatList, Image } from "react-native";
import { fetchPokemons } from "../getPokemons";
import { useEffect, useState } from "react";

export default function Cards({ }) {
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
        <View>
            {/* {pokedex.map((pokemon) => (
                <Text key={pokemon.id}>{pokemon.name}</Text>
            ))} */}
            <FlatList
                data={pokedex}
                renderItem={({ pokemon }) => (
                    <View>
                        <Text>{pokemon.name}</Text>
                    </ View>
                )}
            />
        </View>
    )
}