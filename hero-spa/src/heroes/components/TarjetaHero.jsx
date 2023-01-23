import React from "react";
import { Link } from "react-router-dom";
import { ImgHero } from "./ImgHero";

export const TarjetaHero = ({ hero }) => {
    const {
        id,
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    } = hero;
    return (
        <div className="card w-50">
            <ImgHero imgSrc={id} />
            <div className="card-body">
                <h5 className="card-title">{superhero}</h5>
                
                <a href="#" className="btn btn-primary">
                    {publisher}
                </a>
                <Link to={`/hero/${id}`} className=" mx-4 btn btn-primary">
                    ver mas
                </Link>
            </div>
        </div>
    );
};
