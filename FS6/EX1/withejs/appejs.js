const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("contact");
});

app.post("/submit", (req, res) => {
  const { name, email, subject, message, contactMethod } = req.body;
  res.render("submit", { name, email, subject, message, contactMethod });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
