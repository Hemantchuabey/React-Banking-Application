import mongoose from "mongoose";

const bankSchema = mongoose.Schema;
const bankModel = new bankSchema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  accountType: {
    type: String,
    required: true,
  },
  emailAdrress: {
    type: String,
    required: true,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  accountBalance: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("bankModel", bankModel);
