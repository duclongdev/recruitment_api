import { LetterService } from "./letter.service";

const apply = async (req, res, next) => {
  try {
    const { userId, jobId, infoUser } = req.body;
    console.log(req.body);
    const letter = await LetterService.createCoverLetter(
      userId,
      jobId,
      infoUser
    );
    res.status(200).json(letter);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const getByEmployeeId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const letters = await LetterService.getLetterByEmployeeId(id);
    res.status(200).json(letters);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const saveJob = async (req, res, next) => {
  try {
    const jobId = req.params.id;
    const userId = req.body.userId;
    const saveLetter = await LetterService.saveJob(jobId, userId);
    res.status(200).json(saveLetter);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error.message);
  }
};

const getSavedJob = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const savedLetters = await LetterService.getALlLetter(userId);
    console.log(savedLetters);
    res.status(200).json(savedLetters);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getAchievedJobs = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const savedLetters = await LetterService.getAchievedJobs(userId);
    console.log(savedLetters);
    res.status(200).json(savedLetters);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

const getApplyJobs = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const savedLetters = await LetterService.getApplyJobs(userId);
    console.log(savedLetters);
    res.status(200).json(savedLetters);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};

export const LetterController = {
  apply: apply,
  getByEmployeeId: getByEmployeeId,
  getSavedJob,
  saveJob,
  getAchievedJobs,
  getApplyJobs,
};
