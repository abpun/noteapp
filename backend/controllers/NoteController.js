const Note = require("../models/Note");

exports.notes = async (req, res) => {
    try {
        const allNotes = await Note.find();
        res.json(allNotes);
    } catch (error) {
        console.log(error);
    }
};

exports.create = (req, res) => {
    const { title, content } = req.body;

    try {
        const note = new Note({
            title: title,
            content: content,
        });

        note.save()
            .then((data) => {
                res.json({ ...data, message: "Note created" });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log("Database error");
    }
};

exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        Note.deleteOne({ _id: id })
            .then((data) => {
                res.json({ ...data, message: "Note deleted" });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log("Database error");
    }
};

exports.changeColor = async (req, res) => {
    const { id, color } = req.body;

    await Note.updateOne(
        { _id: id },
        {
            $set: {
                color: color,
            },
        }
    )
        .then((user) => {
            res.status(200).json({ message: "Note Updated" });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
};
