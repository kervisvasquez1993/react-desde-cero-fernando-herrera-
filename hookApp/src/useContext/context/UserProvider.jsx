import React from "react";
import { UserContext } from "./Usercontext";

const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={{ hola: "mundo" }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;
