import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todo",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://jsonplaceholder.typicode.com",
    }),
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => "/todos",
        }),
    }),
});

export const { useGetTodosQuery } = todoApi;
