const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
  const calculatorHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ex-2 3507(WITHOUT EJS)Simple Calculator</title>
        <link rel="stylesheet" href="style.css">

    </head>
    <body>
        <h1>Simple Calculator</h1>
        <form action="/calculate" method="post">
            <label>First Number:</label>
            <input type="number" name="num1" required><br><br>

            <label>Operation:</label>
            <select name="operation" required>
                <option value="add">+</option>
                <option value="subtract">-</option>
                <option value="multiply">*</option>
                <option value="divide">/</option>
            </select><br><br>

            <label>Second Number:</label>
            <input type="number" name="num2" required><br><br>

            <button type="submit">Calculate</button>
        </form>
    </body>
    </html>
  `;
  res.send(calculatorHTML);
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

  const resultHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ex-2 - 3507 Calculation Result</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Calculation Result</h1>
        <p>${n1} ${symbol} ${n2} = ${result}</p>
        <a href="/">Calculate Again</a>
    </body>
    </html>
  `;
  res.send(resultHTML);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
