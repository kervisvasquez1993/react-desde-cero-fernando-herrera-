import React from "react";
import { useState } from "react";
import Isloadin from "./components/Isloadin";
import ListPokemon from "./components/pokemon/ListPokemon";
// import ShowDataOne from "./components/ShowDataOne";
import useFeth from "./hooks/useFeth";

const MultipleHookComponet = () => {
  const [counter, setCounter] = useState(0)
  const base = `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${counter}`;

  const siguiente =  (cantidad) => {
    setCounter(counter + cantidad);
  } 
  const anteriores = (cantidad) => {
    if (counter < 0) return; 
    setCounter(counter - cantidad);
  };
    const { data, isLoading, hasError } = useFeth(base);
   
   

    const resultado = isLoading ? <Isloadin /> : <ListPokemon data={data}/>;
    return <> {resultado}
      <button className="btn btn-primary" onClick={() => siguiente(10)}> siguiente </button>
      <button className="btn btn-primary" onClick={() => setCounter(0)}> reset </button>
      <button className="btn btn-primary" onClick={() => anteriores(10)}> anterior </button>
    </>;
};

export default MultipleHookComponet;
