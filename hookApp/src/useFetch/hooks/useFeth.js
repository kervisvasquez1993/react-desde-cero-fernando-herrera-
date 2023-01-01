import { useEffect, useState } from "react";

const useFeth = (pokemonName) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    const base = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    const getPokemon = async () => {
        setState({ isLoading: true, ...state });
        const response = await fetch(base);
        const data = await response.json();
        setState({
            data, isLoading: false, hasError: null,
        })
    };
    useEffect(() => {
        getPokemon();
    }, [pokemonName]);
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};

export default useFeth;
