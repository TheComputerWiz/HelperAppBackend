const express = require("express");
const app = express();
const user_controller = require("../controllers/user")

app.post("/add_user", user_controller.add_user);
app.patch("/update_user", user_controller.update_user)
app.get("/users", user_controller.getAllUsers);

module.exports = app;