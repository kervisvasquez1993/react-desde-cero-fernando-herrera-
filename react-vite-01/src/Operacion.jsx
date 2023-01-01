import React from 'react'

const Operacion = ({operacion, msj, count}) => {
    let opt = (c) =>  operacion(c)
  return <button onClick={() => opt(count)}>{msj}</button>;
}

export default Operacion