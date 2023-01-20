import "dotenv/config";
import mongoose from "mongoose";
mongoose.set('strictQuery', false);



const uri = process.env.DATABASE_URL;
const connect = mongoose.connect(uri, {});

export default connect;
