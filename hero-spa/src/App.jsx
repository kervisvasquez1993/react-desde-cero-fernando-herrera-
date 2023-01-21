import React from "react";
import AppRouter from "./router/AppRouter";

const App = () => {
    console.log("hola mundo");
    return (
        <>
            <h1>Cabecera</h1>
            <AppRouter />
        </>
    );
};

export default App;
