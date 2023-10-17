import React from "react";
import { Box } from "@mui/material";
import { colors } from "../../values/colors";

export default function ColorChooser({ noteId, handlePaperColor }) {
    const w = 20;
    return (
        <Box
            sx={{
                display: "flex",
                p: 1,
                gap: 1,
            }}
        >
            {colors.map((color, key) => (
                <Box
                    key={key}
                    sx={{
                        width: w,
                        height: w,
                        borderRadius: "5px",
                        background: color,
                        "&:hover": {
                            cursor: "pointer",
                        },
                    }}
                    onClick={() => handlePaperColor(noteId, color)}
                />
            ))}
        </Box>
    );
}
