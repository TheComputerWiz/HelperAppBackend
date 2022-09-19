const express = require("express");
const app = express();
const user_controller = require("../controllers/user")
const auth = require("../middleware/auth");

app.post("/add_user", user_controller.add_user);
app.post("/login", user_controller.login_user);
app.patch("/update_user", auth, user_controller.update_user)
app.get("/users", user_controller.getAllUsers);

module.exports = app;