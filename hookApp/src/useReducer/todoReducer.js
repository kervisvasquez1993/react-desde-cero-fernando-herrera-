export const todoReducer = (initialstate, action) => {
    switch (action.type) {
        case "ADD":
            return [...initialstate, action.payload];

        case "DELETE":
            return initialstate.filter((value) => value.id !== action.payload);
        case "SUCCESS":
            return initialstate.map((value) => {
                if (value.id == action.payload) {
                    return {
                        ...value,
                        done : !value.done
                    }
                }
                return value;
            });
        default:
            return {};
    }
};
