import mongoose from "mongoose";

const { Schema } = mongoose;
const letterSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  jobId: {
    type: Schema.Types.ObjectId,
    ref: "Job",
  },
});

export const Letter = mongoose.model("Letter", letterSchema);
