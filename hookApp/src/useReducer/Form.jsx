import React from "react";
import useForm from "../useEffect/hooks/useForm";

const Form = ({ onNewTodo, onDeleteTodo }) => {
    const { description, onInputChange, onResert } = useForm({
        description: "",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        if (description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        };
        onNewTodo(newTodo);
        onResert(description);
    };
    const deletedElemento = (e) => {
        onDeleteTodo(e.target.value)
        // return ;
    }
    return (
        <>
            <h4>agregar ToDo</h4>
            <hr />
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={onInputChange}
                    placeholder="what have do you do?"
                />
                <button type="submit" className="btn btn-outlet-primary  btn-sm">
                    add
                </button>
            </form>
        </>
    );
};

export default Form;
