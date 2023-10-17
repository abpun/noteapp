import React from "react";
import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import http from "../../config/http";

export default function NewNote() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const { enqueueSnackbar } = useSnackbar();

    const onSubmit = (data) => {
        http.post("/api/note", data)
            .then((response) => {
                console.log(response);
                enqueueSnackbar(response.data.message, {
                    variant: "info",
                    autoHideDuration: 2000,
                });
                form.reset();
            })
            .catch((err) => {
                enqueueSnackbar(err.response.data.message, {
                    variant: "error",
                    autoHideDuration: 2000,
                });
            });
    };

    return (
        <>
            <FormControl
                fullWidth
                sx={{
                    display: "flex",
                    width: "400px",
                    justifyContent: "center",
                    background: "#fff",
                    padding: "2rem 1rem",
                    borderRadius: "10px",
                }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    Add new note
                </Typography>
                <TextField
                    variant="outlined"
                    label="Title"
                    sx={{ mb: 2 }}
                    {...register("title")}
                />
                <TextField
                    variant="outlined"
                    label="Content"
                    multiline
                    rows={4}
                    sx={{ mb: 2 }}
                    {...register("content", {
                        required: {
                            value: true,
                            message: "Content is required",
                        },
                    })}
                    error={errors.content}
                    helperText={errors.content?.message}
                />
                <Button variant="contained" type="submit">
                    Save
                </Button>
            </FormControl>
        </>
    );
}
