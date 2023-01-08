import React from "react";
import Item from "./Item";

const List = ({ items, onDeleteTodo }) => {
    return (
        <ul className="list-group">
            {items.map((e) => (
                <Item key={e.id} item={e} onDeleteTodo={onDeleteTodo} />
            ))}
        </ul>
    );
};

export default List;
