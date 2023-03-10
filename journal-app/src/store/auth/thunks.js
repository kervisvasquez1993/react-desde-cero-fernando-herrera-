import { singInGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthenticate = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
    };
};

export const startGoogle = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInGoogle();
        console.log({ result }); 
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    };
};
