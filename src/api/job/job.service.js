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
const getJobs = async () => {
  try {
    const jobs = await Job.find({ status: true })
      .sort({ createdAt: "desc" })
      .limit(10);
    return jobs;
  } catch (error) {
    console.log(error);
  }
};

const findJobsByCondition = async (condition) => {
  console.log(condition);
  return await Job.find({ $text: { $search: condition }, status: true }).sort({
    createdAt: "desc",
  });
};

const findByTwoCondition = async (jobName, location) => {
  const jobs = await Job.find({
    $text: { $search: jobName },
    status: true,
    location: location,
  }).sort({
    createdAt: "desc",
  });

  return jobs;
};

const findJobs = async (data) => {
  if (data.jobName === "" && data.location === "") {
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
    .select("-jobDescription -salary -companyName -jobDetail")
    .exec();
  return jobs;
};

export const JobService = {
  saveJob: saveJob,
  getJobs: getJobs,
  findJobs: findJobs,
  findJobsByEmployeeId: findJobsByEmployeeId,
};
