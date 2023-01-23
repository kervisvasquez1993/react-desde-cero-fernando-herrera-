import React from "react";
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
                <p className="card-text">caracteres : {characters}</p>
                <p className="card-text">
                    primera impresión : {first_appearance}
                </p>
                <p className="card-text"> alter_ego : { alter_ego}</p>
                <a href="#" className="btn btn-primary">
                    {publisher}
                </a>
            </div>
        </div>
    );
};
