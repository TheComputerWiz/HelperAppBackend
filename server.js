require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes")
const user = require("./routes/user")
const upload_photos = require("./routes/photo_upload")
const verify = require("./routes/verify")

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/', routes)
app.use('/api/worker/user', user)
app.use('/api/upload_photos', upload_photos)
app.use('/api/verify', verify)

app.listen(process.env.API_PORT, () => {
  console.log("Server is running at port 3000");
});