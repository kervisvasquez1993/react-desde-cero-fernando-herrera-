import React from "react";
import { useRef } from "react";

const FocusScreen = () => {
    const inputRef = useRef();

    const onClick = () => {
        inputRef.current.select();
    };
    return (
        <div>
            FocusScreen
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su Nombre"
                className="form-control"
            />
            <button className="btn btn-primary mt-2" onClick={onClick}>BTN</button>
        </div>
    );
};

export default FocusScreen;
