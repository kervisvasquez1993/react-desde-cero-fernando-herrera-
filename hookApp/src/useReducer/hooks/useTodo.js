import { useReducer, useEffect } from "react";
import { todoReducer } from "../todoReducer.js";
const useTodo = () => {
    const initialState = [];
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
        console.log(id);
        const action = {
            type: "DELETE",
            payload: id,
        };
        dispatch(action);
    };
    const handleComplete = (id) => {
        console.log(id);
        const action = {
            type: "SUCCESS",
            payload: id,
        };
        dispatch(action);
    };
    return {
        handleNewTodo,
        handleDelete,
        handleComplete,
        todos,
    };
};

export default useTodo;
