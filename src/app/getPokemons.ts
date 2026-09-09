import axios from "axios";
let pokemons = []

export async function funcaoExportarPokemons(ultimoId = 1) {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId}`)
        pokemons = [...pokemons, response.data]
        
        // console.log(response.data)
        if (ultimoId === 1001) return console.log(pokemons)
        funcaoExportarPokemons(ultimoId+1)
    } catch (error) {
    }

}

// export const getPokemons = async (ultimoId = 1) => {
//     let pokemons = []
//     for (let i = 0; i < 100 ; i++) {
//         try {
//             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i}`)
//             const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+1}`)
//             const response3 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+2}`)
//             const response4 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+3}`)
//             const response5 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+4}`)
//             const response6 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+5}`)
//             const response7 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+6}`)
//             const response8 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+7}`)
//             const response9 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+8}`)
//             const response10 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ultimoId + i+9}`)
//             const pokemon = response.data
//             pokemons = [...pokemons, response.data, response2.data, response3.data, response4.data, response5.data, response6.data, response7.data, response8.data, response9.data, response10.data]
//             console.log(pokemons)
//         } catch (error) {
//             console.error(error)
//         }
//     }
//     return pokemons;
// }