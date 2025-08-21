const nodemailer = require("nodemailer");
const multer = require("multer");

// use memory storage because serverless has no local disk
const upload = multer({ storage: multer.memoryStorage() });

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // Parse form-data
  await new Promise((resolve, reject) => {
    upload.single("file")(req, {}, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });

  const { name, email, number, message, role, subject } = req.body;
  const file = req.file;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_EMAIL_USER,
      pass: process.env.REACT_APP_EMAIL_PASS,
    },
  });

  let mailOptions = {
    from: email,
    to: "dixitnishkarsh0216@gmail.com",
    subject: "",
    text: "",
  };

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
          content: file.buffer,
        },
      ];
    }
  } else {
    mailOptions.subject = `New Message from Contact Form`;
    mailOptions.text = `
      Email: ${email}
      Name: ${name}
      Phone: ${number}
      Message: ${message}
      Subject: ${subject}
    `;
  }

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending mail:", error);
    return res.status(500).json({ message: "Error sending email" });
  }
};
