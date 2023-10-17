import React from "react";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function AppContainer({ children }) {
    const isSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isLg = useMediaQuery((theme) => theme.breakpoints.down("lg"));
    return (
        <Box
            sx={{
                width: isSm ? (isLg ? "100%" : "1200px") : "1200px",
                margin: "auto",
                marginTop: isSm ? "0.5rem" : "1rem",
            }}
        >
            {children}
        </Box>
    );
}
