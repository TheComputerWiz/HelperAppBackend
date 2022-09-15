const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes")
const user = require("./routes/user")
const upload_photos = require("./routes/photo_upload")

const app = express();

app.use(express.json());

const password = "lakers08"
const database = "HelpApp"
const cluster = "cluster0"

mongoose.connect(`mongodb+srv://admin:${password}@${cluster}.revti1e.mongodb.net/${database}`);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use('/', routes)
app.use('/api/worker/user', user)
app.use('/api/upload_photos', upload_photos)

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});