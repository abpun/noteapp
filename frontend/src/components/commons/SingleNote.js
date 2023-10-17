import React, { useState } from "react";
import {
    Box,
    Grid,
    IconButton,
    Paper,
    Popover,
    Typography,
} from "@mui/material";
import { ColorLensRounded, Delete } from "@mui/icons-material";
import http from "../../config/http";
import ConfirmDelete from "./ConfirmDelete";
import ColorChooser from "./ColorChooser";

export default function SingleNote({ note, fetchData, defaultColor }) {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [colorChooser, setColorChooser] = useState(false);
    const [paperColor, setPaperColor] = useState(defaultColor);

    const handleDelete = async (id) => {
        try {
            await http.delete(`/api/note/${id}`);
            setOpen(false);
            fetchData();
        } catch (err) {
            console.log(err);
        }
    };

    const handleColorChoose = (event) => {
        setAnchorEl(event.currentTarget);
        setColorChooser(true);
    };

    const handlePaperColor = async (id, color) => {
        await http.post("/api/note/changecolor", { id, color });
        setPaperColor(color);
        setColorChooser(false);
    };

    return (
        <Grid item xs={4} key={note._id}>
            <Paper
                elevation={1}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: 2,
                    background: paperColor,
                    height: 200,
                    boxShadow: `0px 0px 3px ${paperColor}`,
                }}
                component="div"
            >
                <Box>
                    <Typography variant="h6">
                        {note.title === "" ? "No title" : note.title}
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 200 }}>
                        {note.content}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="body1">{note.updatedAt}</Typography>
                    <Box>
                        <IconButton onClick={handleColorChoose}>
                            <ColorLensRounded color="primary" />
                        </IconButton>
                        <Popover
                            open={colorChooser}
                            onClose={() => setColorChooser(false)}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                        >
                            <ColorChooser
                                noteId={note._id}
                                handlePaperColor={handlePaperColor}
                            />
                        </Popover>
                        <IconButton onClick={() => setOpen(true)}>
                            <Delete color="error" />
                        </IconButton>
                        <ConfirmDelete
                            open={open}
                            setOpen={setOpen}
                            handleDelete={handleDelete}
                            noteId={note._id}
                        />
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
}
