import { Navigate, Route, Routes } from "react-router-dom";
import App from "../App";
import {LoginPage} from "../auth/";
import { DcPage, MarvelPage } from "../heroes/";
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
