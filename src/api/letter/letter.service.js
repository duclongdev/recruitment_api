import { JobService } from "../job/job.service";
import { Letter } from "./letter.model";

const createCoverLetter = async (userId, jobId) => {
  const newLetter = await Letter.create({ userId, jobId });
  return newLetter;
};

const getLetterByEmployeeId = async (id) => {
  const jobs = await JobService.findJobsByEmployeeId(id);
  const letters = new Array();

  for (let job of jobs) {
    const letter = await Letter.find({ jobId: job._id })
      .populate({ path: "userId", select: "-password -role -_id -userId" })
      .exec();
    const temp = {
      job,
      letter,
    };
    letters.push(temp);
  }
  console.log(letters);
  return letters;
};
export const LetterService = {
  createCoverLetter: createCoverLetter,
  getLetterByEmployeeId: getLetterByEmployeeId,
};
