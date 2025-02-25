require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.MAILTRAP_HOST,
  port: process.env.MAILTRAP_PORT,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS,
  },
});

const sendMail = async (to, subject, text, html) => {
  try {
    const info = await transporter.sendMail({
      from: '"Your App Name" <no-reply@yourapp.com>',
      to,
      subject,
      text,
      html,
    });

    console.log("Email sent: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
};

module.exports = sendMail;
