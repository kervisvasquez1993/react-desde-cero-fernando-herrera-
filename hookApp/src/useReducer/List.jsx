import React from "react";
import Item from "./Item";

const List = ({ items, onDeleteTodo, onCompleted }) => {
    return (
        <ul className="list-group">
            {items.map((e) => (
                <Item key={e.id} item={e} onDeleteTodo={onDeleteTodo} onCompleted={onCompleted} />
            ))}
        </ul>
    );
};

export default List;
