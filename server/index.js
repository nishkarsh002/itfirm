require("dotenv").config({ path: ".env.local" });


const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
      user: process.env.REACT_APP_EMAIL_USER,
      pass: process.env.REACT_APP_EMAIL_PASS,
  },
});

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://itfirm-theta.vercel.app' , 'https://itfirm-vcfj.vercel.app/'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());

app.post("/send-email", upload.single("file"), (req, res) => {
  const { name, email, number, message, role,subject } = req.body;
  const file = req.file;

  let mailOptions = {
    from: email,
    to: "dixitnishkarsh0216@gmail.com",
    subject: "",
    text: "",
  };

  // 💼 If role is present, it's likely from the Career form
  if (role) {
    mailOptions.subject = `New Application for ${role}`;
    mailOptions.text = `
      Email: ${email}
      Name: ${name}
      Message: ${message}
      Phone: ${number}
      Applied Role: ${role}
    `;

    if (file) {
      mailOptions.attachments = [
        {
          filename: file.originalname,
          path: file.path,
        },
      ];
    }

  } else {
    // 📩 Contact Form
    mailOptions.subject = `New Message from Contact Form`;
    mailOptions.text = `
      Email: ${email}
      Name: ${name}
      Phone: ${number}
      Message: ${message}
      Subject: ${subject}
    `;
    // no attachments
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console?.error("Error sending mail:", error);
      return res.status(500).json({ message: "Error sending email" });
    }
    res.status(200).json({ message: "Email sent successfully" });
  });
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
