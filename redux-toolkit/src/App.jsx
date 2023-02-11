import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "./store/slices/counter/";

function App() {
    // const [count, setCount] = useState(0);
    // useSelector sirve para tomar una pieza del state
    // useDispatch
    const {counter} = useSelector((state) => state.counter);
    const dispath = useDispatch();
    console.log(counter);
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>count is {counter}</h1>
            <div className="card">
                <button
                    onClick={() => {
                        dispath(increment());
                    }}
                >
                    +1
                </button>
                <button
                    onClick={() => {
                        dispath(decrement());
                    }}
                >
                    -1
                </button>
            </div>
        </div>
    );
}

export default App;
