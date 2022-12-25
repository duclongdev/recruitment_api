import { Router } from "express";
import { JobController } from "./job.controller";

const router = Router();

router.route("/loadMore").get(JobController.loadJobMore);
router.route("/search").get(JobController.findJobs);
router.route("/").get(JobController.getJobs).post(JobController.post);
router.route("/all").get(JobController.getAllJobs);

export default router;
