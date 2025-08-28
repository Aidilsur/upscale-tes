import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "database",
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("masuk error");
    console.log("failed to connect to MongoDB", error);
  }
};

export default connectMongoDB;
