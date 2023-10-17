const controllers = require("../controllers/UserController");

module.exports = (app) => {
    app.get(`/${process.env.APP_VERSION}/api/users`, controllers.users);
    app.post(`/${process.env.APP_VERSION}/api/user/signup`, controllers.signup);
    app.post(`/${process.env.APP_VERSION}/api/user/login`, controllers.login);
};
