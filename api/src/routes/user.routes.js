module.exports = (app) => {
    const user = require("../controllers/user.controller");
    app.route('/')
        .post(user.create);
    app.route('/')
        .get(user.findAll);
    app.route('/:id')
        .get(user.findOne)
    app.route('/:id')
        .put(user.update);
    app.route("/:id")
        .delete(user.delete)
};