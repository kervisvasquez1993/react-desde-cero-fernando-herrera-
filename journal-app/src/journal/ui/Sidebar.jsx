import { TurnedInNot } from "@mui/icons-material";
import {
    Box,
    Divider,
    Drawer,
    Grid,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";

export const Sidebar = ({ drawerWith }) => {
    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWith, flexShrink: { sm: 0 } } }}
        >
            <Drawer
                variant="permanent"
                anchor="left"
                open={true}
                sx={{
                    display: { xs: "block" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWith,
                    },
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        kervis vasquez
                    </Typography>
                </Toolbar>
                <Divider />
                <List>
                    {[
                        "enero",
                        "febrero",
                        "Marzo",
                        "Abril",
                        "Mayo",
                        "Junio",
                        "Julio",
                        "Agosto",
                        "Septiembre",
                        "Octubre",
                        "Noviembre",
                        "Diciembre",
                    ].map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <TurnedInNot />
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secundary={text} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </Box>
    );
};
