import React from "react";
import { getHeroByPublisher } from "../helpers/getheroBypublisher";

export const MarvelPage = () => {
    const heroes = getHeroByPublisher("Marvel Comics");
    return (
        <>
            <h2>Marvel Page</h2>
            {heroes.map((hero) => (
                <h4 key={hero.id}> {hero.superhero}</h4>
            ))}
        </>
    );
};

// export default MarvelPage
