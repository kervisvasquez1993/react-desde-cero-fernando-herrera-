import { configureStore } from "@reduxjs/toolkit";
import { todoApi, useGetTodosQuery } from "./apis/todosApi";
import { counterSlice } from "./slices/counter/";
import { pokemonSlice } from "./slices/pokemon";

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(todoApi.middleware);
    },
});
