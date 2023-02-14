import dotenv from "dotenv";

dotenv.config();

let username = encodeURIComponent(process.env.USERNAME);
let password = encodeURIComponent(process.env.PASSWORD);
let cluster = encodeURIComponent(process.env.CLUSTER);
let mongoDbConfig = encodeURIComponent(process.env.MONGODB_CONFIG);
export let mongoDbUrl = `mongodb+srv://${username}:${password}@${cluster}/${mongoDbConfig}`;
