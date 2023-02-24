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

export const createAccount = async (req, res, next) => {
  const {
    firstName,
    lastName,
    accountType,
    emailAdrress,
    phoneNo,
    accountBalance,
  } = req.body;

  let exisitingAccount;

  try {
    exisitingAccount = await bankModel.findOne({ phoneNo });
  } catch (err) {
    return console.log(err);
  }

  if (exisitingAccount) {
    console.log(exisitingAccount);
    return res.status(400).json({ message: "Account already exist!!" });
  }
  const newAccount = bankModel({
    firstName,
    lastName,
    accountType,
    emailAdrress,
    phoneNo,
    accountBalance,
  });
  try {
    await newAccount.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ newAccount });
};

export const updateAccountBalance = async (req, res, next) => {
  const {
    firstName,
    lastName,
    accountType,
    emailAdrress,
    phoneNo,
    accountBalance,
  } = req.body;
  let customerID = req.params.id;
  let customer;
  try {
    customer = await bankModel.findByIdAndUpdate(customerID, {
      firstName,
      lastName,
      accountType,
      emailAdrress,
      phoneNo,
      accountBalance,
    });
  } catch (err) {
    return console.log(err);
  }
  if (!customer) {
    return res
      .status(500)
      .json({ message: "Unable to Update the Bank Details !!!" });
  }
  return res.status(200).json({ customer });
};
