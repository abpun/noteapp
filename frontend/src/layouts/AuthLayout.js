import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                padding: "2rem",
            }}
        >
            <Outlet />
        </div>
    );
};

export default AuthLayout;
