import { MenuOutlined } from "@mui/icons-material";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import React from "react";

export const Navbar = ({ draweWith = 240 }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { sm: `calc(100% - ${draweWith})px` },
                ml: { sm: `${draweWith}px` },
            }}
        >
            <Toolbar>
                <IconButton>
                    <MenuOutlined />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};
