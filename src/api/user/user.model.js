import mongoose from "mongoose";
const { Schema } = mongoose;
const userSchema = new Schema({
  userId: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 50,
    unique: true,
  },
  name: {
    type: String,
  },
  role: {
    type: String,
    default: "USER",
  },
  photoURL: {
    type: String,
  },
  password: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
