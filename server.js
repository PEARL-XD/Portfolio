require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default to 3000



// Middleware to serve static files and parse body of POST requests
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Redirect root URL "/" to "/home"
app.get("/", (req, res) => {
  console.log("Redirecting to /home");
  res.redirect("/home");
});

// Serve index.html at /home
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Serve the connect page (contact form)
app.get("/connect", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "connect.html"));
});

// Handle contact form submissions
app.post("/submit-form", (req, res) => {
  const { email, name, message } = req.body;

  // Validate input
  if (!email || !name || !message) {
    return res.status(400).send("All fields are required!");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailme = {
    from: email,
    to: process.env.to, // Use a correctly defined variable in .env
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailme, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send("Error Sending Message");
    }
    console.log("Email sent successfully:", info.response);
    res.status(200).send("Message Sent Successfully");
  });
});

// Start the server and listen on all available network interfaces
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on http://localhost:${port}/`);
});
