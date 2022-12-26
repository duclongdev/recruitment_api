import { Job } from "../job/job.model";
import { JobService } from "../job/job.service";
import { Letter } from "./letter.model";

const createCoverLetter = async (userId, jobId, infoUser) => {
  const newLetter = await Letter.create({ userId, jobId, infoUser });
  console.log("apply successfully");
  return newLetter;
};

const getLetterByEmployeeId = async (id) => {
  const jobs = await JobService.findJobsByEmployeeId(id);
  const letters = new Array();

  for (let job of jobs) {
    const letter = await Letter.find({ jobId: job._id }).select(
      "-_id -userId -jobId"
    );
    const temp = {
      job,
      letter,
    };
    letters.push(temp);
  }
  console.log(letters);
  return letters;
};

const saveJob = async (jobId, userId) => {
  const saveLetter = await Letter.create({ jobId, userId, status: "save" });
  return saveLetter;
};

const getSavedJob = async (userId) => {
  const letters = await Letter.find({ userId, status: "save" });
  const jobs = new Array();
  for (const letter of letters) {
    const job = await JobService.findById(letter.jobId);
    const savedTime = letter.createdAt;
    const newJob = {
      ...job,
      savedTime,
    };
    jobs.push(newJob);
  }
  return jobs;
};
const getApplyJobs = async (userId) => {
  const letters = await Letter.find({ userId, status: "process" });
  const jobs = new Array();
  for (const letter of letters) {
    const job = await JobService.findById(letter.jobId);
    const savedTime = letter.createdAt;
    const newJob = {
      ...job,
      savedTime,
    };
    jobs.push(newJob);
  }
  return jobs;
};
const getAchievedJobs = async (userId) => {
  const letters = await Letter.find({ userId, status: "achieved" });
  const jobs = new Array();
  for (const letter of letters) {
    const job = await JobService.findById(letter.jobId);
    const savedTime = letter.createdAt;
    const newJob = {
      ...job,
      savedTime,
    };
    jobs.push(newJob);
  }
  return jobs;
};
export const LetterService = {
  createCoverLetter: createCoverLetter,
  getLetterByEmployeeId: getLetterByEmployeeId,
  saveJob,
  getALlLetter: getSavedJob,
  getApplyJobs,
};
