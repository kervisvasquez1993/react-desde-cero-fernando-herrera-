import { HeroList } from "../components/HeroList";

export const MarvelPage = () => {
    return (
        <>
            <h2>Marvel Page</h2>
            <hr />
            <HeroList heroes={"Marvel Comics"} />
        </>
    );
};
