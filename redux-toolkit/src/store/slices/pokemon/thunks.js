import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());
        // todo: realizar peticion http
        // const result = await fetch(
        //     `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${page}`
        // );
        // const data = await result.json();
        // console.log(data.results);

        const response = await pokemonApi.get(
            `pokemon/?limit=10&offset=${page}`
        );
        const data = response.data
        // console.log(response.data);
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    };
};
