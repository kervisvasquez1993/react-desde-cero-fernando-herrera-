import { LogoutOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";

export const Navbar = ({ draweWith = 2400 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${draweWith}px)` },
                ml: { sm: `${draweWith}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    sx={{ mr: 2, display: { sm: "none" } }}
                >
                    <MenuOutlined />
                </IconButton>
                <Grid container direction="row" justifyContent="space-between" alignItems="center">
                    <Typography
                        varinat="h6"
                        noWrap
                        component="div"
                        color="initial"
                    >
                        {" "}
                        JournalApp
                    </Typography>
                    <IconButton color="error" aria-label="" onClick={() => {
                        console.log("hola")
                    }}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};
