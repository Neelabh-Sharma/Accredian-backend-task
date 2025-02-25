import prisma from "../config/db.js"; 
import sendEmail from "../config/emailService.js";

export const submitReferral = async (req, res) => {
  try {
    const { referrerName, referrerEmail, referralCourse, referredName, referredEmail } = req.body;

    // Validate input fields
    if (!referrerName || !referrerEmail || !referralCourse || !referredName || !referredEmail) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Check if the referral already exists
    const existingReferral = await prisma.referral.findUnique({
      where: { referredEmail },
    });

    if (existingReferral) {
      return res.status(400).json({ error: "This friend has already been referred!" });
    }

    // Create the referral record in the database
    const referral = await prisma.referral.create({
      data: { referrerName, referrerEmail, referralCourse, referredName, referredEmail },
    });

    // Send confirmation email
    await sendEmail(referrerEmail, referredName);

    res.status(201).json({ message: "Referral submitted successfully!", referral });
  } catch (error) {
    console.error("Error submitting referral:", error);
    res.status(500).json({ error: "Failed to submit referral" });
  }
};
