const express = require("express");
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  const HTMLform = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ex-1 3507(WITHOUT EJS)</title>
    </head>
    <body>
        <h1>Contact Us</h1>
        <form action="/submit" method="post">
            <label>Name:</label>
            <input type="text" name="name" id="name" required><br><br>

            <label>Email:</label>
            <input type="email" name="email" id="email" required><br><br>

            <label>Subject:</label>
            <input type="text" name="subject" id="subject" required><br><br>

            <label>Message:</label><br>
            <textarea name="message" id="message" rows="4" required></textarea><br><br>

            <label>Preferred Contact Method:</label><br>
            <input type="radio" id="email" name="contactMethod" value="Email" required>
            <label for="email">Email</label><br>
            <input type="radio" id="phone" name="contactMethod" value="Phone">
            <label for="phone">Phone</label><br><br>

            <button type="submit">Submit</button>
        </form>
    </body>
    </html>
  `;
  res.send(HTMLform);
});

app.post("/submit", (req, res) => {
  const { name, email, subject, message, contactMethod } = req.body;
  const confirmationHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>3507-Submission Confirmation</title>
    </head>
    <body>
     <div class="confirmation">
        <h1>Thank you for contacting us!</h1>
        <h2>Your Submission Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
        <br>
        <a href="/">Go back to the form</a>
      <div>
    </body>
    </html>
  `;
  res.send(confirmationHTML);
});


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
