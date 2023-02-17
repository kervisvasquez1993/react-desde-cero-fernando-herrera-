import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidate = {}) => {
    const [formState, setFormState] = useState(initialForm);
    const [formValidated, setFormValidated] = useState({});
    useEffect(() => {
        createValidators();
    }, [formState]);

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const onResetForm = () => {
        setFormState(initialForm);
    };

    const createValidators = () => {
        const formCheckValue = {};
        for (const formField of Object.keys(formValidate)) {
            const [fn, errorMensaje = "Este Campo es requerido."] =
                formValidate[formField];
            formCheckValue[`${formField}Valid`] = fn(formState[formField])
                ? null
                : errorMensaje;
        }
        setFormValidated(formCheckValue);
    };

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidated,
    };
};
