import { useState } from "react";

const useForm = (initialFormInput = {}) => {
    const [formState, setFormState] = useState(initialFormInput);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        });
        // console.log({ name, value });
    };
    const onResert = () => setFormState(initialFormInput)
    return {
        formState,
        ...formState,
        onInputChange,
        onResert,
    };
};

export default useForm;
