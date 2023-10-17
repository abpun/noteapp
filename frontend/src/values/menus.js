import { Add, Book, Dashboard, Update } from "@mui/icons-material";

export const menus = [
    { name: "Dashboard", icon: <Dashboard />, link: "dashboard" },
    {
        name: "Notes",
        icon: <Book />,
        link: "notes",
        submenus: [
            { name: "Add", link: "add", icon: <Add /> },
            { name: "Update", link: "update", icon: <Update /> },
        ],
    },
];
