import { useReducer } from "react";
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
    return (
        <>
            <h1>todoApp</h1>
            <hr />
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
        </>
    );
};

export default IntroReducerNew;
