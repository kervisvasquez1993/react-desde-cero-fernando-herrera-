import { Box } from "@mui/system";
import React from "react";
import { Navbar, Sidebar } from "../ui";
const draweWith = 240;

export const JournalLayout = ({ children }) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar draweWith={draweWith} />
            <Sidebar drawerWith={draweWith} />
            <Box component={"main"} sx={{ flexGrow: 1, p: 0 }}>
                {children}
            </Box>
        </Box>
    );
};
