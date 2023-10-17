import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import SingleNote from "./commons/SingleNote";
import http from "../config/http";

export default function NoteView() {
    const [notes, setNotes] = useState();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data } = await http.get("/api/notes");
            const parsedData = data.map((item) => ({
                ...item,
                createdAt: new Date(item.createdAt).toLocaleDateString(),
                updatedAt: new Date(item.updatedAt).toLocaleDateString(),
            }));
            setNotes(parsedData);
        } catch (err) {
            console.log(err);
        }
    };

    if (!notes || notes.length === 0) {
        return <Typography variant="h5">No notes</Typography>;
    }

    return (
        <>
            <Grid container spacing={3}>
                {notes.map((note) => {
                    return (
                        <SingleNote
                            note={note}
                            defaultColor={note.color}
                            key={note._id}
                            fetchData={fetchData}
                        />
                    );
                })}
            </Grid>
        </>
    );
}
