import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
const PokemonApp = () => {
    const dispach = useDispatch();
    const { page, pokemons, isLoading } = useSelector((state) => state.pokemon);
    // console.log(test)
    console.log(page);
    console.log(pokemons, isLoading);

    useEffect(() => {
        dispach(getPokemons());
    }, []);

    return (
        <>
            <h1>Pokemon list</h1>
            <hr />
            <ul>
                {isLoading ? (
                    <div>Loading....</div>
                ) : (
                    pokemons.map((pokemon) => (
                        <li key={pokemon.name}>
                            <a href={pokemon.url}>{pokemon.name}</a>
                        </li>
                    ))
                )}

                <button onClick={() => dispach(getPokemons(page))}>next</button>
            </ul>
        </>
    );
};

export default PokemonApp;
