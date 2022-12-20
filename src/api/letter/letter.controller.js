import { LetterService } from "./letter.service";

const apply = async (req, res, next) => {
  try {
    const { userId, jobId } = req.body;
    const letter = await LetterService.createCoverLetter(userId, jobId);
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

export const LetterController = {
  apply: apply,
  getByEmployeeId: getByEmployeeId,
};
