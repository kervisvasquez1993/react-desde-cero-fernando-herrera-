import Form from "./Form.jsx";
import useTodo from "./hooks/useTodo.js";
import List from "./List.jsx";

const IntroReducerNew = () => {
    const { handleNewTodo, handleDelete, handleComplete, todos } = useTodo();
    return (
        <>
            <h1>todoApp</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <List
                        items={todos}
                        onDeleteTodo={handleDelete}
                        onCompleted={handleComplete}
                    />
                </div>
                <div className="col-5">
                    <Form onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    );
};

export default IntroReducerNew;
