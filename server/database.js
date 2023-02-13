import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

let username = encodeURIComponent(process.env.USERNAME);
let password = encodeURIComponent(process.env.PASSWORD);
let cluster = encodeURIComponent(process.env.CLUSTER);
let mongoDbConfig = encodeURIComponent(process.env.MONGODB_CONFIG);
let mongoDbUrl = `mongodb+srv://${username}:${password}@${cluster}/${mongoDbConfig}`;

export function connectToDb(callback) {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(mongoDbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((error) => console.error(error));

  return callback();
}
