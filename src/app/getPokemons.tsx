import axios from "axios";

export async function fetchPokemons() {
  try {
    const response = await axios.post(`https://beta.pokeapi.co/graphql/v1beta`, {
      query: `
        query GetPokemons {
          pokemon_v2_pokemon(limit: 1025) {
            id
            name
            pokemon_v2_pokemonsprites {
              sprites
            }

          }
        }
      `,
    });

    return response.data.data.pokemon_v2_pokemon;

  } catch (error) {
    console.error("Erro ao carregar pokemons:", error);
    return [];
  }
}