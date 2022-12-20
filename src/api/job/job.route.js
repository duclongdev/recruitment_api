import { Router } from "express";
import { JobController } from "./job.controller";

const router = Router();

router.route("/").get(JobController.getJobs).post(JobController.post);
router.route("/search").get(JobController.findJobs);

export default router;
