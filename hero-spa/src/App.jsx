import React from "react";
import { AuthProvider } from "./auth/context";
import AppRouter from "./router/AppRouter";

const App = () => {
    console.log("hola mundo");
    return (
        <>
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </>
    );
};

export default App;
