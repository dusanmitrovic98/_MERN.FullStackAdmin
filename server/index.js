import managementRoutes from "./routes/management.js";
import generalRoutes from "./routes/general.js";
import clientRoutes from "./routes/client.js";
import salesRoutes from "./routes/sales.js";
import bodyParser from "body-parser";
import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import { connectToDb } from "./database.js";

/* CONFIGURATION */
dotenv.config();

const app = express();
let port = process.env.PORT || 9000;

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use("/general", generalRoutes);
app.use("/client", clientRoutes);
app.use("/management", managementRoutes);
app.use("/sales", salesRoutes);

/* MONGOOSE SETUP */
connectToDb(() => {
  console.log("Connected to database.");
});
