import userRoute from "../api/user/user.route";
import employeeRoute from "../api/employee/employee.route";
import jobRoute from "../api/job/job.route";
import letterRoute from "../api/letter/letter.route";

const initRoute = (app) => {
  app.use("/api/user", userRoute);
  app.use("/api/employee", employeeRoute);
  app.use("/api/job", jobRoute);
  app.use("/api/letter", letterRoute);
};
export default initRoute;
