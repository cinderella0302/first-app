import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

export async function dbConnect() {
    // Connect to the database
    if (!MONGODB_URI) {
        console.error("MONGODB_URI is not defined");
        return false;
    }
    try{
        await mongoose.connect(MONGODB_URI);
        console.log("----- debug: Connected mongodb -----");
        return true
    } catch (error) {
        console.error("Failed to connect to mongodb", error);
        return false
    }
}