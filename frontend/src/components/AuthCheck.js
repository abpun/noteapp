import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AuthCheck() {
    const navigate = useNavigate();
    useEffect(() => {
        const details =
            JSON.parse(localStorage.getItem("User_Credential")) || {};

        if (details?.isLoggedIn) navigate("/admin/dashboard");
        else navigate("/auth/login");
    }, []);

    return <div>AuthCheck</div>;
}
