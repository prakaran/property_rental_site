import mongoose from "mongoose";

let connected = false;
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  if (connected) {
    console.log("MongoDB is already connect...");
    return;
  }
  if (!mongoURI) {
    console.error("MONGODB_URI is not defined in environment variables");
    return;
  }

  try {
    await mongoose.connect(mongoURI);
    connected = true;
    console.log("MongoDB connected...");
  } catch (error) {
    console.log(error);
  }
};
export default connectDB;
