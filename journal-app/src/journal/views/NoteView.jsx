import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, Typography, TextField } from "@mui/material";

export const NoteView = () => {
    return (
        <Grid
            container
            spacing={0}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            sx={{
                mb: 1,
                pl: 4,
                pr : 2
            }}
        >
            <Grid item>
                <Typography
                    variant="h6"
                    color="initial"
                    fontSize={39}
                    fontWeight={"light"}
                >
                    28 de agosto, 2023
                </Typography>
            </Grid>
            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>
             <Grid container>
                <TextField
                    type="text"
                    label="titulo"
                    fullWidth
                    placeholder="Ingrese un un titulo"
                    sx={{ border: "none", mb: 1 }}
                />
                <TextField
                    type="text"
                    variant="filled"
                    multiline
                    minRows={5}
                    label="description"
                    fullWidth
                    placeholder="what happing today ? "
                    sx={{ border: "none", mb: 1 }}
                />
            </Grid> 
        </Grid>
    );
};
