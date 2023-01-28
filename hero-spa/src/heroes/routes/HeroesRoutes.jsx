import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, Hero, MarvelPage, Search } from "../pages";
import { HeroShow } from "../pages/HeroShow";
import { SearchPage } from "../pages/SearchPage";

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Navigate to="marvel" />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DcPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero" element={<Hero />} />
                    <Route path="hero/:id" element={<HeroShow />} />
                </Routes>
            </div>
        </>
    );
};
