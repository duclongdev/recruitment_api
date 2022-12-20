import mongoose from "mongoose";

const { Schema } = mongoose;
const jobScheme = new Schema(
  {
    userId: {
      type: String,
    },
    companyName: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
    jobName: {
      type: String,
    },
    location: {
      type: String,
    },
    jobDetail: new Schema(
      {
        jobType: [],
        amountOfJob: String,
        amountOfWeek: String,
      },
      { _id: false }
    ),
    salary: new Schema(
      {
        salaryType: String,
        startAmount: String,
        endAmount: String,
        amount: String,
        time: String,
      },
      { _id: false }
    ),

    jobDescription: {
      type: String,
    },
  },
  { timestamps: true }
);
jobScheme.index({ jobName: "text", companyName: "text", location: "text" });

export const Job = mongoose.model("Job", jobScheme);
