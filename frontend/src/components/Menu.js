import React, { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";
import {
    List,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Collapse,
} from "@mui/material";
import { Link } from "react-router-dom";

const MenuItem = ({ name, icon, link, submenus }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <>
            <ListItemButton
                component={Link}
                to={link}
                key={link}
                onClick={toggleSubMenu}
            >
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} sx={{ marginLeft: -2 }} />
                {submenus && (isSubMenuOpen ? <ExpandLess /> : <ExpandMore />)}
            </ListItemButton>

            {submenus && isSubMenuOpen && submenus.length > 0 && (
                <Collapse in={true} timeout="auto" unmountOnExit>
                    <List component="div" sx={{ pl: 4 }}>
                        {submenus.map((submenu) => (
                            <MenuItem
                                key={submenu.name}
                                {...submenu}
                                link={`${link}/${submenu.link}`}
                            />
                        ))}
                    </List>
                </Collapse>
            )}
        </>
    );
};

export default function Menu({ menus }) {
    return (
        <List>
            {menus.map((menu, index) => (
                <MenuItem key={index} {...menu} />
            ))}
        </List>
    );
}
