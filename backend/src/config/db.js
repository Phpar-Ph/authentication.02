import mongoose from "mongoose";

const connectDB = async () => {
  mongoose.connection.on("connected", () =>
    console.log("Connected to MongoDB")
  );
  await mongoose.connect(`${process.env.MONGODB_URL}/auth2.0`);
};

export default connectDB;
