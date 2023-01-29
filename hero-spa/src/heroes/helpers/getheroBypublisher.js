import { heroes } from "../data/heroes";

export const getHeroByPublisher = (publisher) => {
    const validPublishers = ["DC Comics", "Marvel Comics"];
    if (!validPublishers.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`);
    }
    return heroes.filter((hero) => hero.publisher === publisher);
};
export const getHeroById = (id) => {
    return heroes.find((hero) => hero.id === id);
};


export const getHeroByName = (name) => {
    // return heroes.find((hero) => hero. === id);
    name = name.toLocaleLowerCase();
    if(name.length === 0) return [];
    return heroes.filter(hero => hero.superhero.toLocaleLowerCase().includes(name));

};

