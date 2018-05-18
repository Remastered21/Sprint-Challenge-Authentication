const { authenticate } = require("../utils/middlewares");

const { getAllJokes, createUser, login, bypass } = require("../controllers");

const User = require("../models/userModels");

module.exports = server => {
  server.get("/api/jokes", authenticate, getAllJokes);
  server.route("/api/users").post(createUser);
  server.route("/api/login").post(login);
  
  server.get("/bypass", (req, res) => {
    User.find()
      .then(users => {
        res.json(users);
      })
      .catch(err => res.json(err));
  });
};
