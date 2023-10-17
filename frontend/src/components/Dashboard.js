import React, { useEffect, useState } from "react";
import http from "../config/http";
import { Typography } from "@mui/material";
import CustomTable from "./commons/CustomTable";
import { userColumns } from "../values/columns";

export default function Dashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await http.get("/api/users");
            setUsers(data);
        } catch (err) {
            console.log(err);
        }
    };

    if (!users || users.length === 0) {
        return <Typography variant="h5">No Users</Typography>;
    }

    return (
        <>
            <CustomTable url="/api/users" columns={userColumns} />
        </>
    );
}
