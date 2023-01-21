import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import LoginPage from "../auth/pages/LoginPage";
import DcPage from "../heroes/pages/DcPage";
import MarvelPage from "../heroes/pages/MarvelPage";
import { Navbar } from "../ui";

const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Navigate to="marvel" />} />
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="login" element={<LoginPage />} />
            </Routes>
        </>
    );
};

export default AppRouter;
