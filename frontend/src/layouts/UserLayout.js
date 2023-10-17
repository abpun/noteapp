import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Box, Switch, TextField, Typography } from "@mui/material";
import AppContainer from "./AppContainer";

export default function UserLayout() {
    const [darkMode, setDarkmode] = useState(false);

    return (
        <AppContainer>
            <Box
                sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}
            >
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                    Notes App
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1">Dark Mode</Typography>
                    <Switch
                        aria-label="Darkmode"
                        checked={darkMode}
                        onChange={() => setDarkmode(!darkMode)}
                    />
                </Box>
            </Box>

            <TextField
                type="search"
                sx={{ mb: 2, width: "100%" }}
                placeholder="type to search text ... "
            />
            <Outlet />
        </AppContainer>
    );
}
