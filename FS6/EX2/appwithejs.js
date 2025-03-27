const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("calculator");
});

app.post("/calculate", (req, res) => {
  const { num1, num2, operation } = req.body;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  let result;
  let symbol;

  switch (operation) {
    case "add":
      result = n1 + n2;
      symbol = "+";
      break;
    case "subtract":
      result = n1 - n2;
      symbol = "-";
      break;
    case "multiply":
      result = n1 * n2;
      symbol = "*";
      break;
    case "divide":
      if (n2 !== 0) {
        result = n1 / n2;
      } else {
        result = "Undefined (Cannot divide by zero)";
      }
      symbol = "/";
      break;
  }

  res.render("result", { n1, n2, symbol, result });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
