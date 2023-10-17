import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

export const theme = createTheme({
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "dashed" },
                    style: {
                        textTransform: "none",
                        border: "2px dashed hotpink",
                        background: "pink",
                        ":hover": {
                            background: "black",
                            color: "white",
                        },
                    },
                },
                {
                    props: { variant: "sandip" },
                    style: {
                        textTransform: "none",
                        border: "5px dashed black",
                    },
                },
            ],
        },
    },
});
