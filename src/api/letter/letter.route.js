import { Router } from "express";
import { LetterController } from "./letter.controller";

const router = Router();

router.route("/").post(LetterController.apply);
router.route("/employee/:id").get(LetterController.getByEmployeeId);

export default router;