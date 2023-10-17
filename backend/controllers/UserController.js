const User = require("../models/User");

exports.users = async (req, res) => {
    try {
        const allUsers = await User.find().select("-password");
        res.json(allUsers);
    } catch (error) {
        console.log(error);
    }
};

exports.signup = async (req, res) => {
    const { name, username, email, password } = req.body;

    try {
        const user = new User({
            name: name,
            username: username,
            email: email,
            password: password,
        });

        user.save()
            .then((data) => {
                res.json({ ...data, message: "User created" });
            })
            .catch((error) => {
                console.log(error);
            });
    } catch (error) {
        console.log(error);
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username: username });
        if (!user)
            return res.status(404).json({ message: "Username not found" });

        const isValidUser = password === user.password;
        if (!isValidUser)
            return res.status(401).json({ message: "Invalid Password" });

        const userDetails = {
            uid: user._id,
            email: user.email,
            name: user.name,
            username: user.username,
        };

        res.json({ ...userDetails, message: "User logged in" });
    } catch (error) {
        console.log(error);
    }
};
