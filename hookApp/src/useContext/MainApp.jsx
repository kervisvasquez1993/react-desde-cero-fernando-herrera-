import { Routes, Route, Navigate, Link } from "react-router-dom";
import AboutPage from "./AboutPage";
import UserProvider from "./context/UserProvider";
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";
import NavBar from "./Menu/NavBar";
import NotEncontrado from "./NotEncontrado";

const MainApp = () => {
    return (
        <UserProvider>
            <div>MainApp</div>
            <NavBar />
            <hr />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="login" element={<LoginPage />} />
                {/* <Route path="/*" element={<NotEncontrado />} /> */}
                <Route path="/*" element={<Navigate to="/about" />} />
            </Routes>
        </UserProvider>
    );
};

export default MainApp;
