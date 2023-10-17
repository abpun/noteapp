import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Menu } from "@mui/icons-material";

export default function NavBar({ handleDrawer, open }) {
    const navigate = useNavigate();

    return (
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2, ...(open && { display: "none" }) }}
                onClick={handleDrawer}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
            </Typography>
            <Button color="inherit" onClick={() => navigate("/auth/login")}>
                Login
            </Button>
        </Toolbar>
    );
}
