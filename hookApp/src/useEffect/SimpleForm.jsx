import React, { useState } from "react";
import { useEffect } from "react";
import Messages from "./Messages";

const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: "kervis",
        email: "kervis@gmail.com",
    });
    const { username, email } = formState;
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
        // console.log({ name, value });
    }; 

    useEffect(() => {
        // console.log("useEffect called");
    }, []);
    // se recomienda usar un effect por cada accion que quiero ejecutar
    useEffect(() => {
        // console.log("formState called");
    }, [formState]);
    useEffect(() => {
        // console.log("email called");
    }, [formState.email]);
    return (
        <>
            <div>SimpleForm</div>
            <hr />
            <input
                type="text"
                placeholder="Username"
                name="username"
                className="form-control"
                value={username}
                onChange={(e) => onInputChange(e)}
            />
            <input
                type="email"
                placeholder="ejemplo@gmail.com"
                name="email"
                className="form-control mt-2"
                value={email}
                onChange={(e) => onInputChange(e)}
            />

            {username === "kervis vasquez" ? <Messages /> : ""}
        </>
    );
};

export default SimpleForm;
