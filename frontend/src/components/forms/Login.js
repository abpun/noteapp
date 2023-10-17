import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import http from "../../config/http";

export default function Login() {
    const form = useForm();
    const { register, handleSubmit, formState } = form;
    const { errors } = formState;

    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        http.post("/api/user/login", data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem(
                    "User_Credential",
                    JSON.stringify({
                        ...response.data,
                        isLoggedIn: true,
                    })
                );
                enqueueSnackbar(response.data.message, {
                    variant: "success",
                    autoHideDuration: 2000,
                });
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response);
                enqueueSnackbar(err.response.data.message, {
                    variant: "error",
                    autoHideDuration: 2000,
                });
            });
    };

    return (
        <>
            <Typography variant="h4">Login</Typography>
            <FormControl
                sx={{
                    padding: 3,
                    width: "600px",
                }}
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                fullWidth
            >
                <TextField
                    variant="outlined"
                    label="Username"
                    sx={{ mb: 2 }}
                    {...register("username", {
                        required: {
                            value: true,
                            message: "Username is empty",
                        },
                    })}
                    error={errors.username}
                    helperText={errors.username?.message}
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    sx={{ mb: 2 }}
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is empty",
                        },
                    })}
                    error={errors.password}
                    helperText={errors.password?.message}
                />
                <Button variant="contained" sx={{ mb: 2 }} type="submit">
                    Login
                </Button>
                <Typography variant="subtitle" component="p">
                    Don't have account&nbsp;
                    <Link to="/auth/signup" style={{ textDecoration: "none" }}>
                        Signup here
                    </Link>
                </Typography>
            </FormControl>
        </>
    );
}
