module.exports = (app) => {
    require("./user")(app);
    require("./note")(app);
};
