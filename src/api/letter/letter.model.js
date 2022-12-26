import mongoose from "mongoose";

const { Schema } = mongoose;
const letterSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    jobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
    },
    infoUser: new Schema(
      {
        fullName: String,
        email: String,
        phoneNumber: String,
        address: String,
        education: String,
        experience: String,
        someDescription: String,
        questions: String,
        photoURL: String,
      },
      { _id: false }
    ),
    status: {
      type: String,
      default: "process",
    },
  },
  { timestamps: true }
);

export const Letter = mongoose.model("Letter", letterSchema);
