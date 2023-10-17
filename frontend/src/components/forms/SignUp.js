import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Button, FormControl, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import http from "../../config/http";

export default function SignUp() {
    const form = useForm();
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const onSubmit = (data) => {
        http.post("/api/user/signup", data);
    };

    return (
        <>
            <Typography variant="h4">Signup</Typography>
            <FormControl
                component="form"
                fullWidth
                sx={{
                    padding: 3,
                    width: "600px",
                }}
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    variant="outlined"
                    label="Name"
                    sx={{ mb: 2 }}
                    {...register("name", {
                        required: {
                            value: true,
                            message: "Name is empty",
                        },
                    })}
                    error={errors.name}
                    helperText={errors.name?.message}
                />
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
                    label="Email"
                    type="email"
                    {...register("email", {
                        required: {
                            value: true,
                            message: "Email is empty",
                        },
                    })}
                    error={errors.email}
                    helperText={errors.email?.message}
                    sx={{ mb: 2 }}
                />
                <TextField
                    variant="outlined"
                    label="Password"
                    type="password"
                    {...register("password", {
                        required: {
                            value: true,
                            message: "Password is empty",
                        },
                    })}
                    error={errors.password}
                    helperText={errors.password?.message}
                    sx={{ mb: 2 }}
                />
                <Button variant="contained" sx={{ mb: 2 }} type="submit">
                    Sign Up
                </Button>
                <Typography variant="subtitle" component="p">
                    Already a user&nbsp;
                    <Link to="/auth/login" style={{ textDecoration: "none" }}>
                        Login
                    </Link>
                </Typography>
            </FormControl>
            <DevTool control={control} />
        </>
    );
}
