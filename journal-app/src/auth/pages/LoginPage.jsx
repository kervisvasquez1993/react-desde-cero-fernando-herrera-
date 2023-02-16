import { useMemo } from "react";
import { Link as RouteLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuthenticate, startGoogle } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

export const LoginPage = () => {
    const { status } = useSelector((state) => state.auth);
    const isAuthenticated = useMemo(() => status === "checking", [status]);
    console.log(isAuthenticated);
    const dispatch = useDispatch();
    const { email, password, onInputChange } = useForm({
        email: "email@gmail.com",
        password: "password",
    });
    const onSubmit = (e) => {
        e.preventDefault();
        // console.log({ email, password });
        dispatch(checkingAuthenticate());
    };
    const onGoogleSingIn = () => {
        console.log("onGoogle SingIn");
        dispatch(startGoogle());
    };
    return (
        <AuthLayout title={"Login"}>
            <form action="">
                <Grid container>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            id=""
                            label="Correo"
                            type="email"
                            name="email"
                            placeholder="correo@gmail.com"
                            value={email}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            label="password"
                            type="password"
                            name="password"
                            placeholder="password"
                            value={password}
                            onChange={onInputChange}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ p: 1 }}>
                    <Grid item xs={12} sm={6}>
                        <Button
                            disabled={isAuthenticated}
                            type="submit"
                            onClick={(e) => onSubmit(e)}
                            variant="contained"
                            fullWidth
                        >
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            disabled={isAuthenticated}
                            onClick={onGoogleSingIn}
                            variant="contained"
                            fullWidth
                        >
                            <Google />
                            <Typography sx={{ ml: 1 }}> Goolge</Typography>
                        </Button>
                    </Grid>
                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouteLink}
                            color="inherit"
                            to="/auth/register"
                        >
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
