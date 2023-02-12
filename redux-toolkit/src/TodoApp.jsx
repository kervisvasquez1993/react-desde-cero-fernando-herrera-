import React from "react";
import { useGetTodosQuery } from "./store/apis/todosApi";

export const TodoApp = () => {
    // const {useGetTodosQuery} =
    const { data: todos, isLoading } = useGetTodosQuery();
    const algo = useGetTodosQuery();
    console.log(todos);
    console.log(algo);
    return (
        <>
            <div>Todo - RTK Query</div>
            <hr />
            <h4>isloading</h4>
            <pre>...</pre>
            <ul>
                {todos?.map((todo) => (
                    <li key={todo.id}>
                        <strong> {todos.completed ? "DONE" : "PENDING"} </strong>
                        {todo.title}
                    </li>
                ))}
            </ul>
            <button> Next Todo</button>
        </>
    );
};
