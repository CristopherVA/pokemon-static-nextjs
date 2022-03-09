import { pokeApi } from "../api";
import { Pokemon } from "../interfaces";


export const getPokemonInfo = async ( pokeNameOrId: any ) => {

    const { data }= await pokeApi.get<Pokemon>(`/pokemon/${ pokeNameOrId }`);
  
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites
    }

}
