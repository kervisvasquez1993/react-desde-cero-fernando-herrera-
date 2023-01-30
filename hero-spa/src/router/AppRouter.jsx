import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth/";
import { HeroesRoutes } from "../heroes/";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRouter } from "./PublicRouter";

const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route
                    path="login/*"
                    element={
                        <PublicRouter>
                            <Route path="/*" element={<LoginPage />} />
                        </PublicRouter>
                    }
                />

                {/* <Route path="login" element={<LoginPage />} /> */}
                <Route
                    path="/*"
                    element={
                        <PrivateRoute>
                            <HeroesRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
        </>
    );
};

export default AppRouter;
