const express = require("express");
const app = express();
const verify_controller = require('../controllers/verify')

app.get("/:to", verify_controller.send_verification);
app.get("/check/:to/:code", verify_controller.verify);

module.exports = app;