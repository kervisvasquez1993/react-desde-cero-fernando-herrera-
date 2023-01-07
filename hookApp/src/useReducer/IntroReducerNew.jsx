import { useReducer } from "react";
import Form from "./Form.jsx";
import Item from "./Item.jsx";
import List from "./List.jsx";
import { todoReducer } from "./todoReducer.js";
const IntroReducerNew = () => {
    const initialState = [
        {
            id: new Date().getTime(),
            description: "recolectar piedras del alma",
            done: false,
        },
        {
            id: new Date().getTime() * 3,
            description: "recolectar piedras del alma",
            done: false,
        },
    ];
    
    const [todos, dispatch] = useReducer(todoReducer, initialState);
    const handleNewTodo = (todo) => {
      console.log(todo)
    };
    return (
        <>
            <h1>todoApp</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <List items={todos} />
                </div>
                <div className="col-5">
                    <Form onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};

export default IntroReducerNew;
