import { checkingCredentials, login } from "./authSlice";

export const checkingAuthenticate = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogle = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};
