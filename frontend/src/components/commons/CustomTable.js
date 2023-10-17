import React, { useEffect, useState } from "react";
import http from "../../config/http";
import {
    Table,
    TableContainer,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper,
    Typography,
} from "@mui/material";

export default function CustomTable({ url, columns }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        http.get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log("Error fetching data", error);
            });
    }, [url]);

    if (!data || data.length === 0) {
        <Typography variant="h5">No Data</Typography>;
    }
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) => (
                            <TableCell key={column.field}>
                                {column.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>

                <TableBody>
                    {data.map((item) => (
                        <TableRow key={item._id}>
                            {columns.map((column) => (
                                <TableCell key={column.field}>
                                    {item[column.field]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
