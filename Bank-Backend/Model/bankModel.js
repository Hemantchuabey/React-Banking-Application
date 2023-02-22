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
  balance: {
    type: String,
    required: true,
  },
});

export default mongoose.model("bankModel", bankModel);
