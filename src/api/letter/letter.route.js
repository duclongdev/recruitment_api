import { Router } from "express";
import { LetterController } from "./letter.controller";

const router = Router();

router.route("/").post(LetterController.apply);
router
  .route("/save/:id")
  .get(LetterController.getSavedJob)
  .post(LetterController.saveJob);
router.route("/apply/:id").get(LetterController.getApplyJobs);
router.route("/achieved/:id").get(LetterController.getAchievedJobs);

router.route("/employee/:id").get(LetterController.getByEmployeeId);

export default router;
