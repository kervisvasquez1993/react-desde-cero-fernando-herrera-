import { useEffect, useState } from "react";

const useFeth = (baseUrl) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    });
    console.log(baseUrl);
    
    const getPokemon = async () => {
        setState({ isLoading: true, ...state });
        const response = await fetch(baseUrl);
        const data = await response.json();
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    };
    useEffect(() => {
        getPokemon();
    }, [baseUrl]);
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
};

export default useFeth;
