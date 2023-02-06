import { Grid, Typography, TextField, Button } from "@mui/material";
import React from "react";

export const LoginPage = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundColor: "primary.main",
                padding: 4,
            }}
        >
            <Grid
                item
                className="box-shadow"
                xs={2}
                sx={{ backgroundColor: "white", padding: 3, borderRadius: 2 }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Login
                </Typography>
                <form action="">
                    <Grid container>
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
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth>Login</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};
