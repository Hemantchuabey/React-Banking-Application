import express from "express";
import { getAllAccount } from "../Controllers/bankControllers";

const bankRouter = express.Router();

bankRouter.get("/", getAllAccount);

export default bankRouter;
