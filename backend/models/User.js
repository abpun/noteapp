const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: { type: String, default: null },
        username: { type: String, default: null },
        email: { type: String, default: null, unique: true },
        password: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Users", userSchema);
