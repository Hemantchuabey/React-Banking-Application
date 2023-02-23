import express from "express";
import { getAllAccount, createAccount } from "../Controllers/bankControllers";

const bankRouter = express.Router();

bankRouter.get("/", getAllAccount);
bankRouter.post("/createAccount", createAccount);

export default bankRouter;
