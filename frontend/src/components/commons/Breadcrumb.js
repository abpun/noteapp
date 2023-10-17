import { Breadcrumbs } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <Breadcrumbs sx={{ mb: 1 }}>
            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1)}`;
                const isLast = index === pathnames.length - 1;
                return isLast ? (
                    <span key={name} style={{ textTransform: "capitalize" }}>
                        {name}
                    </span>
                ) : (
                    <Link
                        key={name}
                        to={routeTo}
                        style={{
                            textDecoration: "none",
                            textTransform: "capitalize",
                        }}
                    >
                        {name}
                    </Link>
                );
            })}
        </Breadcrumbs>
    );
}
