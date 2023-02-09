import { Box } from "@mui/system";
import React from "react";
import { Navbar } from "../ui";
const draweWith = 240

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{ display: "flex" }}>
            <Navbar draweWith={draweWith} />
            <Box component={"main"} sx={{ flexGrow: 1, p: 3 }}>
                {/* toolbar */}

                {children}
            </Box>
        </Box>
    );
};
