const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Help App"));
app.get("/api", (req, res) => res.send("Help App API"));
app.get("/api/worker", (req, res) => res.send("Help App Worker API"));
app.get("/api/customer", (req, res) => res.send("Help App Customer API"));

module.exports = app;