import dotenv from "dotenv";
import express from "express";
import referralRoutes from "./routes/routes.js"; 
import cors from "cors";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//  Allow all origins, methods, and headers
app.use(cors());

app.use(express.json());

// Default Route
app.get("/", (req, res) => {
  res.send("Working on version API 1.0.0");
});

// Define routes after CORS middleware
app.use("/api/referrals", referralRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
