import React from "react";
import { Box, Button, Modal, Typography } from "@mui/material";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 2,
};

export default function ConfirmDelete({ open, setOpen, handleDelete, noteId }) {
    return (
        <Modal open={open} onClose={() => setOpen(false)}>
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Are you sure you want to delete?
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDelete(noteId)}
                    >
                        Delete
                    </Button>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={() => setOpen(false)}
                        sx={{ ml: 2, my: 1 }}
                    >
                        Cancel
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}
