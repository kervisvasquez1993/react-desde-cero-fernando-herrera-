import React from "react";
import { TarjetaHero } from "../components/TarjetaHero";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";

export const Hero = () => {
    const heroesDc = getHeroByPublisher("DC Comics");
    const heroesMarvel = getHeroByPublisher("Marvel Comics");
    const totalHero = heroesDc.concat(heroesMarvel)

    return (
        <>
            <h1>Hero Page</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {totalHero.map((hero) => {
                    return <TarjetaHero key={hero.id} hero={hero} />;
                })}
            </div>
        </>
    );
};
