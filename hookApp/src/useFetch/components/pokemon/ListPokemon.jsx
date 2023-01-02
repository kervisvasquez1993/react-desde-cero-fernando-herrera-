import { useState, useEffect } from 'react'
import ShowDataOne from '../ShowDataOne';

const ListPokemon = ({data}) => {
    const { results } = data
    const [state ,setState]= useState(results)
    useEffect(() => {
        setState(results);
    }, [results]);
    // console.log(state)
  return (
      <div className="container">
          <div className="row">
              {state.map((e) => {
                  return (
                      <div className="col-4 col-lg-2 col-md-3 col-md-auto  " key={e.name}>
                          <ShowDataOne pokemon={e.url} />
                      </div>
                  );
              })}
          </div>
      </div>
  );
}

export default ListPokemon