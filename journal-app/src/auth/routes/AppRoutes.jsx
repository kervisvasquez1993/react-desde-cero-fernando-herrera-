import React from "react";
import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="" element={<LoginPage />} />
        </Routes>
    );
};
