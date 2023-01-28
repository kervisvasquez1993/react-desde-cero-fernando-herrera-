import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    };
    return (
        <div className="row mt-5">
            <div className="col-8">
                <button
                    className="btn btn-outline-info"
                    onClick={onNavigateBack}
                >
                    {" "}
                    back{" "}
                </button>
                <ImgHero imgSrc={id} />
                <div className="card-body">
                    <h5 className="card-title p-3">{superhero}</h5>
                    <p className="card-text">caracteres : {characters}</p>
                    <p className="card-text">
                        primera impresión : {first_appearance}
                    </p>
                    <p className="card-text">publicado : {publisher}</p>
                    <p className="card-text"> alter_ego : {alter_ego}</p>
                </div>
            </div>
        </div>
    );
};
export const HeroShow = () => {
    const { id } = useParams();
    const getHeroforId = useMemo(() => getHeroById(id), [id]);

    return getHeroforId != undefined ? (
        <LayoutHero getHeroforId={getHeroforId} />
    ) : (
        <h3 className="py-5">
            el parametro <span className="alert alert-danger">{id}</span> no
            pudo ser encontrado
        </h3>
    );
};
