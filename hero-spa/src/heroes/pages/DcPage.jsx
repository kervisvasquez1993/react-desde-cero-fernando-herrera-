import React from "react";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";

export const DcPage = () => {
    const heroes = getHeroByPublisher("DC Comics");
    return (
        <>
            <h1>Dc Page</h1>
            {heroes.map((hero) => {
                return <h3 key={hero.id}>{hero.superhero}</h3>;
            })}
        </>
    );
};

// export default DcPage
