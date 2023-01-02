import React from "react";
import useFeth from "../hooks/useFeth";
import Isloadin from "./Isloadin";

const ShowDataOne = ({ pokemon }) => {
    console.log(pokemon);
    const { data, isLoading, hasError } = useFeth(pokemon);
    if (isLoading) return <Isloadin />;
    return (
        <div className="col-6">
            <img src={data.sprites.front_default} alt="" />
            <h3>{data.name}</h3>
        </div>
    );
};

export default ShowDataOne;
