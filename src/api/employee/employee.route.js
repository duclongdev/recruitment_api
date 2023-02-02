import { Router } from "express";
import { EmployeeController } from "./employee.controller";

const router = Router();

router.route("/:id").put(EmployeeController.updateById);
router.route("/signin").post(EmployeeController.signin);
router.route("/login").post(EmployeeController.login);
router.route("/all").get(EmployeeController.getAllEmployee);

export default router;
