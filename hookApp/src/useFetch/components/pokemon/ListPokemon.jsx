import { useState, useEffect } from 'react'

const ListPokemon = ({data}) => {
    const { results } = data
    const [state ,setState]= useState(results)
    useEffect(() => {
        setState(results);
    }, [results]);
    console.log(state)
  return (
   <ul>
    {state.map(e => {
      return <li key={e.name}>
        <a href={e.url}>{e.name}</a>
      </li>
    })}
   </ul>
  )
}

export default ListPokemon