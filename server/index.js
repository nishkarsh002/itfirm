const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const upload = multer({ dest: "uploads/" });

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send-email", upload.single("file"), async (req, res) => {
  const { name, email, number, message, role } = req.body;
  const file = req.file; // Uploaded file info

  console.log({ name, email, number, message, role, file });

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "n79420953@gmail.com",
      pass: "llua jzvi fkto dasm", // App password
    },
  });

  // Build mail options
  const mailOptions = {
    from: email,
    to: "dixitnishkarsh0216@gmail.com",
    subject: `New Application for ${role}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${number}
Message: ${message}
    `,
    attachments: [
      {
        filename: file.originalname,
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

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
