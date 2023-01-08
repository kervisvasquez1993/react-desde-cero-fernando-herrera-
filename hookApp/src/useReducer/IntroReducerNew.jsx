import { useReducer, useEffect } from "react";
import Form from "./Form.jsx";
import Item from "./Item.jsx";
import List from "./List.jsx";
import { todoReducer } from "./todoReducer.js";
const IntroReducerNew = () => {
    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: "recolectar piedras del alma",
        //     done: false,
        // }
    ];
    const init = () => {
        return JSON.parse(localStorage.getItem("todos")) || [];
    };

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log(todos);
    }, [todos]);
    const handleNewTodo = (todo) => {
        const action = {
            type: "ADD",
            payload: todo,
        };
        dispatch(action);
    };
    const handleDelete = (id) => {
        console.log(id)
        const action = {
            type: "DELETE",
            payload: id,
        };
        dispatch(action)
    }
    const handleComplete = (id) => {
        console.log(id)
        const action = {
            type: "SUCCESS",
            payload: id,
        };
        dispatch(action)
    }
    return (
        <>
            <h1>todoApp</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <List items={todos} onDeleteTodo={handleDelete}  onCompleted={handleComplete}/>
                </div>
                <div className="col-5">
                    <Form onNewTodo={handleNewTodo}  />
                </div>
            </div>
        </>
    );
};

export default IntroReducerNew;
