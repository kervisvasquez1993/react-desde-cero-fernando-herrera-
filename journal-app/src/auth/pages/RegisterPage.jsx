import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { AuthLayout } from "../layouts/AuthLayout";

export const RegisterPage = () => {
    return (
        <AuthLayout title="register">
            <form action="">
                <Grid container>
                <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            id=""
                            label="Nombre"
                            type="text"
                            placeholder="Nombre Completo"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            id=""
                            label="Correo"
                            type="email"
                            placeholder="correo@gmail.com"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ p: 1 }}>
                        <TextField
                            label="password"
                            type="password"
                            placeholder="password"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <Grid container spacing={2} sx={{ p: 1 }}>
                    <Grid item xs={12} sm={12}>
                        <Button variant="contained" fullWidth>
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
