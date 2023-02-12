import React, { useEffect } from "react";
import {  useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
const PokemonApp = () => {
    const dispach = useDispatch();
    useEffect(() => {
        dispach(getPokemons());
    }, []); 

    return <div>PokemonApp</div>;
};

export default PokemonApp;
