import express from "express";
import {
  getAllAccount,
  createAccount,
  updateAccountBalance,
  deleteAccount,
} from "../Controllers/bankControllers";

const bankRouter = express.Router();

bankRouter.get("/", getAllAccount);
bankRouter.post("/createAccount", createAccount);
bankRouter.put("/updateAccount/:id", updateAccountBalance);
bankRouter.delete("/deleteAccount/:id", deleteAccount);

export default bankRouter;
