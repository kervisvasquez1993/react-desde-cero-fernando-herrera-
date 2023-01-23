import React from "react";
import { TarjetaHero } from "../components/TarjetaHero";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";

export const MarvelPage = () => {
    const heroes = getHeroByPublisher("Marvel Comics");
    return (
        <>
            <h2>Marvel Page</h2>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map((hero) => {
                    return <TarjetaHero key={hero.id} hero={hero} />;
                })}
            </div>
        </>
    );
};

// export default MarvelPage
