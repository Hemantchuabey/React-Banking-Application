import bankModel from "../Model/bankModel";

export const getAllAccount = async (req, res, next) => {
  let createdAccount;
  try {
    createdAccount = await bankModel.find();
  } catch (err) {
    return console.log(err);
  }
  if (!createdAccount) {
    return res.status(404).json({ message: "createdAccount Not Found!!" });
  }
  return res.status(200).json({ createdAccount });
};
