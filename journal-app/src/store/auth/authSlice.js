import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: "not-authenticated", // 'checking',not-authenticated , authenticated
        uid: null,
        email: null,
        displayName: null,
        photoURL: null,
        erorrMessage: null,
    },
    reducers: {
        login: (state, actions) => {},
        logout: (state, payload) => {},
        register: (state, actions) => {},
        checkingCredentials: (state) => {},
    },
});
// Action creators are generated for each case reducer function
export const { login, logout, register, checkingCredentials } =
    authSlice.actions;
