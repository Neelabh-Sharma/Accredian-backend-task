import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  secure: true,
  host: "smtp.gmail.com",
  port:465,
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const sendEmail = async (toEmail, referredBy,referralCourse) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: "Referral Received",
    text: `You've been referred by ${referredBy}. Start learning & earning now! with this ${referralCourse}`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
