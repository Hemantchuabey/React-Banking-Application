import express from "express";
import {
  getAllAccount,
  createAccount,
  updateAccountBalance,
} from "../Controllers/bankControllers";

const bankRouter = express.Router();

bankRouter.get("/", getAllAccount);
bankRouter.post("/createAccount", createAccount);
bankRouter.put("/updateAccount/:id", updateAccountBalance);

export default bankRouter;
