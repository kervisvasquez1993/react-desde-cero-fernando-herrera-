import React from 'react'

const Item = ({item, onDeleteTodo, onCompleted}) => {
  const eliminar = (param) => {
    onDeleteTodo(param)
  }
  const completar = (param) => {
    onCompleted(param)
  }
  return (
      <li
          className={`list-group-item d-flex justify-content-between ${
              (item.done) ? "bg-success" : ""
          }`}
      >
          <span className="align-self-center">{item.description}</span>
          <div>
              <button
                  className="btn btn-sm btn-primary"
                  onClick={() => completar(item.id)}
              >
                  {item.done ? "Completado" : "Marcar"}
              </button>
              <button
                  className="btn btn-sm btn-danger"
                  onClick={() => eliminar(item.id)}
              >
                  delete
              </button>
          </div>
      </li>
  );
}

export default Item