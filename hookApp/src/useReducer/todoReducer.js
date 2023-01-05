export const todoReducer = (initialstate, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...initialstate,
                todos: [...initialstate.todos, action.todo],
            };
        default: 
            return {};
    }
}