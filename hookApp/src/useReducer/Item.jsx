import React from 'react'

const Item = ({item, onDeleteTodo}) => {
  const eliminar = (param) => {
    onDeleteTodo(param)
  }
  return (
      <li className="list-group-item d-flex justify-content-between">
          <span className="align-self-center">{item.description}</span>
          <button
              className="btn btn-sm btn-danger"
              onClick={() => eliminar(item.id)}
          >
              delete
          </button>
      </li>
  );
}

export default Item