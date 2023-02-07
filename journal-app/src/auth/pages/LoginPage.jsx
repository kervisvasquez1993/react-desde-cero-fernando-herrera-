import { Link as RouteLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Grid, Typography, TextField, Button, Link } from "@mui/material";
import { AuthLayout } from "../layouts/AuthLayout";

export const LoginPage = () => {
    return (
        <AuthLayout title={"Login"}>
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
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth>
                            Login
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button variant="contained" fullWidth>
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
