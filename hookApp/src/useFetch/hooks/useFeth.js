import { useEffect, useState } from "react";

const useFeth = (offset = 0) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    console.log(offset);
    const base = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`;

    const getPokemon = async () => {
        setState({ isLoading: true, ...state });
        const response = await fetch(base);
        const data = await response.json();
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    };
    useEffect(() => {
        getPokemon();
    }, [offset]);
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};

export default useFeth;
