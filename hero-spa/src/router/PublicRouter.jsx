import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/context";

export const PublicRouter = ({children}) => {
    const { authState } = useContext(AuthContext);
    return authState.logged ?  <Navigate to="/marvel" /> : children ;
};
