import React from "react";
import Item from "./Item";

const List = ({ items }) => {
    return (
        <ul className="list-group">
            {items.map((e) => (
                <Item key={e.id} item={e} />
            ))}
        </ul>
    );
};

export default List;
