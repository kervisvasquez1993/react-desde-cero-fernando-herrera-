import React from "react";
import { useParams } from "react-router-dom";
import { ImgHero } from "../components/ImgHero";
import { getHeroById } from "../helpers/getheroBypublisher";

const LayoutHero = ({ getHeroforId }) => {
    const {
        id,
        alter_ego,
        characters,
        first_appearance,
        publisher,
        superhero,
    } = getHeroforId;
    return (
        <div className="card">
            <ImgHero imgSrc={id} />
            <div className="card-body">
                <h5 className="card-title p-3">{superhero}</h5>
                <p className="card-text">caracteres : {characters}</p>
                <p className="card-text">
                    primera impresión : {first_appearance}
                </p>
                <p className="card-text">
                    publicado : {publisher}
                </p>
                <p className="card-text"> alter_ego : {alter_ego}</p>
            </div>
        </div>
    );
};
export const HeroShow = () => {
    const { id } = useParams();
    const getHeroforId = getHeroById(id);

    return getHeroforId != undefined ? (
        <LayoutHero getHeroforId={getHeroforId} />
    ) : (
        <h3>Pagina no enconrada</h3>
    );
};
