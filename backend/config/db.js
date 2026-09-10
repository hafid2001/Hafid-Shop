import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGODB_URL) {
      console.log("MONGODB_URL is missing in .env");
      return;
    }

    await mongoose.connect(process.env.MONGODB_URL);

    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
};

export default connectDB;