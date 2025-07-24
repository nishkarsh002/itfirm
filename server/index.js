require("dotenv").config({ path: ".env.local" });


const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

const app = express();
const allowedOrigins = ['http://localhost:3000', 'https://itfirm-theta.vercel.app'];

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

app.post("/send-email", upload.single("file"), async (req, res) => {
  const { name, email, number, message, role } = req.body;
  const file = req.file; // Uploaded file info

  console.log({ name, email, number, message, role, file });

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Build mail options
  const mailOptions = {
    from: email,
    to: "dixitnishkarsh0216@gmail.com",
    subject: `New Application for ${role}`,
    text: `
    Email: ${email}
    Name: ${name}
    Message: ${message}
    Phone: ${number}
    `,
    attachments: [
      {
        filename: file.originalname || "No File Uploded",
        path: file.path,
      },
    ],
  };

  try {
    await transporter.sendMail(mailOptions);
    fs.unlinkSync(file.path);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send failed:", err);
    res.status(500).json({ success: false, error: err.message });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
