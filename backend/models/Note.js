const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            default: "Note title",
        },
        content: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            default: "#FEE6C8",
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Notes", noteSchema);
