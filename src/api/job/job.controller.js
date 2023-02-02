import { JobService } from "./job.service";

const post = async (req, res, next) => {
  try {
    const jobData = await JobService.saveJob(req.body);
    res.status(200).json("debug");
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const getJobs = async (req, res, next) => {
  try {
    const jobs = await JobService.getJobs();
    console.log("getJobs");
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
};

const getAllJobs = async (req, res, next) => {
  try {
    const jobs = await JobService.getAllJobs();
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
};

const findJobs = async (req, res, next) => {
  try {
    const jobs = await JobService.findJobs(req.query);
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const loadJobMore = async (req, res, next) => {
  try {
    const { jobName, location, offset } = req.query;
    const jobs = await JobService.loadMore(jobName, location, offset);
    console.log(jobs);
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

const updateByJobId = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const update = { ...req.body };
    const updatedJob = await JobService.updateById(_id, update);
    res.status(200).send(updatedJob);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

const deleteByJobId = async (req, res, next) => {
  try {
    const _id = req.params.id;
    const deletedJob = await JobService.deleteById(_id);
    res.status(200).json(deletedJob);
  } catch (e) {
    console.log(e.message);
    res.status(500).send(e.message);
  }
};

export const JobController = {
  post: post,
  getJobs: getJobs,
  findJobs: findJobs,
  loadJobMore: loadJobMore,
  update: updateByJobId,
  delete: deleteByJobId,
  getAllJobs,
};
