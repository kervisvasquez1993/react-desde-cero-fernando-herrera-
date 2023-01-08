export const todoReducer = (initialstate, action) => {
    switch (action.type) {
        case "ADD":
           return [...initialstate, action.payload]
        
           case "DELETE":
                return initialstate.filter((value) => value.id !== action.payload);
        default: 
            return {};
    }
}