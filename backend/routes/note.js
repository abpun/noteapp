const controllers = require("../controllers/NoteController");

module.exports = (app) => {
    app.get(`/${process.env.APP_VERSION}/api/notes`, controllers.notes);
    app.post(`/${process.env.APP_VERSION}/api/note`, controllers.create);
    app.post(
        `/${process.env.APP_VERSION}/api/note/changecolor`,
        controllers.changeColor
    );
    app.delete(`/${process.env.APP_VERSION}/api/note/:id`, controllers.delete);
};
