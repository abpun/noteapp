import { useState } from "react";
import { Outlet } from "react-router-dom";
import {
    Box,
    CssBaseline,
    Drawer,
    IconButton,
    Typography,
} from "@mui/material";
import { AppBar as MuiAppBar } from "@mui/material";
import Menu from "../components/Menu";
import NavBar from "../components/NavBar";
import { menus } from "../values/menus";
import { styled } from "@mui/material/styles";
import { Menu as MenuButton } from "@mui/icons-material";
import Breadcrumb from "../components/commons/Breadcrumb";

// variables
const drawerWidth = 240;

// styled components
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const AppLayout = () => {
    const [open, setOpen] = useState(true);

    const handleDrawer = () => {
        setOpen(!open);
    };
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    width: "100%",
                }}
            >
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <NavBar handleDrawer={handleDrawer} open={open} />
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Typography variant="h6" sx={{ mr: 7 }}>
                            Main Logo
                        </Typography>
                        <IconButton onClick={handleDrawer}>
                            <MenuButton />
                        </IconButton>
                    </DrawerHeader>
                    <Menu menus={menus} />
                </Drawer>

                <Main
                    open={open}
                    sx={{ background: "#f4f4f4", height: "100vh" }}
                >
                    <DrawerHeader />
                    <Breadcrumb sx={{ mb: 1 }} />
                    <Outlet />
                </Main>
            </Box>
        </>
    );
};

export default AppLayout;
