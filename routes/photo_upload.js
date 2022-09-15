const express = require("express");
const app = express();
const photo_controller = require("../controllers/photo_upload")

app.post("/add_photo", photo_controller.upload_photo);

module.exports = app;