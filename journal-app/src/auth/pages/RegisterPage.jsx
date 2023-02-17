import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { AuthLayout } from "../layouts/AuthLayout";
const formData = {
    email: "kervis@gmail.com",
    password: "123456789",
    displayName: "kervis vasquez",
};
const formValidate = {
    email: [(value) => value.includes("@"), "El correo debe tener un @"],
    password: [
        (value) => value.length <= 6,
        "El Password debe tener mas de 6 letras",
    ],
    displayName: [
        (value) => value.length >= 1,
        "El nombre debe tener al manos un carater",
    ],
};
export const RegisterPage = () => {
    const {
        displayName,
        email,
        password,
        onInputChange,
        formState,
        isFormValid,
        emailValid,
        passwordValid,
    } = useForm(formData, formValidate);
    const onSubmitForm = (e) => {
        e.preventDefault();
        console.log(formState);
    };
    console.log(emailValid);
    return (
        <AuthLayout title="register">
            <h1>form validate {isFormValid ? "true" : "incorrecto"}</h1>
            <form onSubmit={onSubmitForm}>
                <Grid container>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            label="Nombre"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                            name="displayName"
                            value={displayName}
                            onChange={onInputChange}
                            error={true}
                            helperText={"El nombre es Obliogatorio"}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            label="password"
                            type="password"
                            placeholder="password"
                            fullWidth
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ p: 1 }}>
                    <Grid item xs={12} sm={12}>
                        <Button type="submit" variant="contained" fullWidth>
                            crear cuenta
                        </Button>
                    </Grid>

                    <Grid container direction="row" justifyContent="end">
                        <Link
                            component={RouteLink}
                            color="inherit"
                            to="/auth/login"
                        >
                            Ir al Login
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    );
};
