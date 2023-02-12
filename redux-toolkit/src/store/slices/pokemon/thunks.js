import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
    return async (dispatch, getState) => {
        dispatch(startLoadingPokemon());
        // todo: realizar peticion http
        const response = await pokemonApi.get(
            `pokemon/?limit=10&offset=${page * 10}`
        );
        const data = response.data;
        dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
    };
};
