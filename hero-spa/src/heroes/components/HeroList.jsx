import React, { useMemo } from "react";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";
import { TarjetaHero } from "./TarjetaHero";

export const HeroList = ({ heroes }) => {
    const heroList = useMemo(() => getHeroByPublisher(heroes), [heroes]);
    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {heroList.map((hero) => {
                return <TarjetaHero key={hero.id} hero={hero} />;
            })}
        </div>
    );
};
