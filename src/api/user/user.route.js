import { Router } from "express";
import { Controller } from "./user.controller";

const router = Router();

router.route("/login").post(Controller.login);
router.route("/signin").post(Controller.signin);
router.route("/:id").put(Controller.update);
router.route("/all").get(Controller.getAllUser);

export default router;
