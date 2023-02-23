import express from "express";
import mongoose from "mongoose";
import bankRouter from "./Routes/bankRoutes";

const app = express();
mongoose.set("strictQuery", true);
app.use(express.json());
app.use("/", bankRouter);
mongoose
  .connect("mongodb://127.0.0.1:27017/bankDatabase")
  .then(app.listen(5000))
  .then(console.log("Connected to Database and Listening to port 5000"))
  .catch((err) => {
    console.log(err);
  });
