import { ManOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { JournalLayout } from "../Layout/JournalLayout";
import { NoteView } from "../views";
import { NothingSelectedview } from "../views/NothingSelectedview";

export const JournalPage = () => {
    return (
        <JournalLayout>
            {/* <Typography >
                Deserunt commodo pariatur proident ipsum ex voluptate sunt.
            </Typography> */}
            {/* <NothingSelectedview /> */}
            {/* <ManOutlined/> */}
            <NoteView />
        </JournalLayout>
    );
};
