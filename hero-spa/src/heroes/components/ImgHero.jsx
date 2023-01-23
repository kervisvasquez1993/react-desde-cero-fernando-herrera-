import React from "react";

export const ImgHero = ({ imgSrc }) => {
    const srcimg = `/src/assets/hero/${imgSrc}.jpg`;
    return <img src={srcimg} className="card-img-top" alt="..."></img>;
};
