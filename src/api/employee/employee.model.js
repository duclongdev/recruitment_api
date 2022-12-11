import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  fullName: {
    type: String,
  },
  position: {
    type: String,
    require: true,
  },
  emailCompany: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
  companyName: {
    type: String,
  },
  websiteCompany: {
    type: String,
  },
  role: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const Employee = mongoose.model("Employee", userSchema);
