import React from 'react'

const ButtonCounter = ({messaje, valor, updateCounter, contador }) => {

  return (
      <>
          <h2>{messaje}</h2>
          <button
              className="btn btn-primary"
              onClick={() =>updateCounter(valor, "sumar", contador) }
          >
              +1
          </button>
          <button
              className="btn btn-primary"
              onClick={() =>updateCounter(valor, "restar", contador) }
          >
              -1
          </button>
      </>
  );
}

export default ButtonCounter