import React from "react";
import useForm from "./hooks/useForm";

const FormCustomHooks = () => {
    const { formState, onInputChange, username, email, password, onResert } =
        useForm({
            username: "",
            email: "",
            password: "",
        });
    // const {username, email, password} = formState
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
            <input
                type="password"
                placeholder="password"
                name="password"
                className="form-control mt-2"
                value={password}
                onChange={(e) => onInputChange(e)}
            />
            <button type="text" className="btn btn-primary" onClick={onResert}>
                Resert{" "}
            </button>
        </>
    );
};

export default FormCustomHooks;
