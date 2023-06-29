import express from "express";
import connectDb from "./config/dbConnections.js";
// import  errorHandler from "./middleware/errorHandler";
// require("dotenv").config();
import contactRoutes from "./routes/contactRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDb();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
// app.use(errorHandler);
app.use("/api/contacts", contactRoutes);
app.use("/api/users", userRoutes);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
