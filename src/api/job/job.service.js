import { Job } from "./job.model";

const saveJob = async (jobFullInfo) => {
  console.log(jobFullInfo);
  const toSave = {
    userId: jobFullInfo.companyInfo.userId,
    jobName: jobFullInfo.jobBasic.jobName,
    companyName: jobFullInfo.companyInfo.companyName,
    location: jobFullInfo.jobBasic.location,
    jobDescription: jobFullInfo.jobDescription,
    salary: jobFullInfo.salary !== "noneSalary" ? jobFullInfo.salary : null,
    jobDetail: jobFullInfo.jobDetail,
  };
  const job = await Job.create(toSave);
};
const getJobs = async (offset = 0) => {
  try {
    const jobs = await Job.find({ status: true })
      .sort({ createdAt: "desc" })
      .skip(offset)
      .limit(5);
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

const getAllJobs = async () => {
  try {
    const jobs = await Job.find({ status: true }).sort({ createdAt: "desc" });
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

const findJobsByCondition = async (condition, offset = 0) => {
  console.log(condition);
  return await Job.find({ $text: { $search: condition }, status: true })
    .sort({
      createdAt: "desc",
    })
    .skip(offset)
    .limit(5);
};

const findByTwoCondition = async (jobName, location, offset = 0) => {
  const jobs = await Job.find({
    $text: { $search: jobName },
    status: true,
    location: location,
  })
    .skip(offset)
    .sort({
      createdAt: "desc",
    });

  return jobs;
};

const checkNull = (data) => {
  if (data === "" || data === undefined || data === null) return true;
  return false;
};

const findJobs = async (data) => {
  if (checkNull(data.jobName) && checkNull(data.location)) {
    const jobs = await getJobs();
    return jobs;
  }
  const jobs =
    data.jobName !== "" && data.location === ""
      ? findJobsByCondition(data.jobName)
      : data.jobName === "" && data.location !== ""
      ? findJobsByCondition(data.location)
      : findByTwoCondition(data.jobName, data.location);
  return jobs;
};

const findJobsByEmployeeId = async (employeeId) => {
  const jobs = await Job.find({ userId: employeeId })
    .sort({ createdAt: "desc" })
    .select("-jobDescription -salary -companyName -jobDetail")
    .exec();
  return jobs;
};

const loadMore = async (jobName, location, offset) => {
  console.log(jobName, location, offset);
  if (
    (jobName === "" && location === "") ||
    (jobName === undefined && location === undefined)
  ) {
    const jobs = await getJobs(offset);
    return jobs;
  }
  console.log("ddeo");
  const jobs =
    jobName !== "" && location === ""
      ? findJobsByCondition(jobName, offset)
      : jobName === "" && location !== ""
      ? findJobsByCondition(location, offset)
      : findByTwoCondition(jobName, location, offset);
  return jobs;
};

const updateById = async (_id, update) => {
  const updatedJob = await Job.findOneAndUpdate(_id, update, {
    new: true,
  });
  return updatedJob;
};

const deleteById = async (_id) => {
  const deletedJob = await Job.deleteOne({ _id });
  return deletedJob;
};

const findById = async (_id) => {
  const job = await Job.findOne(_id);
  return job;
};

export const JobService = {
  saveJob: saveJob,
  getJobs: getJobs,
  findJobs: findJobs,
  findJobsByEmployeeId: findJobsByEmployeeId,
  loadMore: loadMore,
  findById,
  updateById: updateById,
  deleteById: deleteById,
  getAllJobs,
};
