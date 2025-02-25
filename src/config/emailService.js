import nodemailer from "nodemailer";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.GMAIL_USER,
//     pass: process.env.GMAIL_PASS,
//   },
// });
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
      user: 'bulah.muller9@ethereal.email',
      pass: 'MarM439pf5zC3RzUHh'
  }
});
const sendEmail = async (toEmail, referredBy) => {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: toEmail,
    subject: "Referral Received",
    text: `You've been referred by ${referredBy}. Start learning & earning now!`,
  };

  await transporter.sendMail(mailOptions);
};

export default sendEmail;
