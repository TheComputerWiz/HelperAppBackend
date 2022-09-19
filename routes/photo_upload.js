const express = require("express");
const app = express();
const photo_controller = require("../controllers/photo_upload")
const auth = require("../middleware/auth");

app.post("/add_photo", auth, photo_controller.upload_photo);

module.exports = app;