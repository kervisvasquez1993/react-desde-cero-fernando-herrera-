import React from "react";
import { TarjetaHero } from "../components/TarjetaHero";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";

export const DcPage = () => {
    const heroes = getHeroByPublisher("DC Comics");
    return (
        <>
            <h1>Dc Page</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map((hero) => {
                    return <TarjetaHero key={hero.id} hero={hero} />;
                })}
            </div>
        </>
    );
};

// export default DcPage
