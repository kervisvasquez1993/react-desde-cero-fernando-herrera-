import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../hooks/useForm";

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    // console.log(query);
    const { searchHero, onInputChange } = useForm({
        searchHero: "",
    });
    const onSearchChange = (e) => {
        e.preventDefault();

        if (searchHero.trim().length <= 1) return;
        // console.log({ searchHero });
        navigate(`?q=${searchHero.toLowerCase().trim()}`);
    };
    return (
        <>
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Buscando</h4>
                    <hr />
                    <form onSubmit={onSearchChange}>
                        <input
                            type="text"
                            name="searchHero"
                            placeholder="buscar Heroe"
                            autoComplete="off"
                            className="form-control"
                            value={searchHero}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-1">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>resultado</h4>
                    <hr />
                    <div className="alert alert-primary">buscar un heroe</div>
                    <div className="alert alert-danger">
                        no hay heroe <b>{q}</b>
                    </div>
                </div>
            </div>
        </>
    );
};
