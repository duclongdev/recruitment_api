import { json } from "body-parser";
import { Service } from "./user.service";

const login = async (req, res, next) => {
  try {
    console.log("đăng nhập");
    console.log(req.body);
    const user = req.body.password
      ? await Service.loginWithPassword(req.body)
      : await Service.login(req.body);
    console.log("login successful");
    res.status(200).json(user);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

const signin = async (req, res, next) => {
  try {
    console.log("da nhan duco request");
    console.log(req.body);
    const user = {
      name: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
    };
    const employee = await Service.signin(user);
    res.status(200).json(employee);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};

const update = async (req, res, next) => {
  try {
    const userInfo = req.body;
    const userId = req.params.id;
    const updateUser = await Service.update(userId, userInfo);
    res.status(200).json(updateUser);
  } catch (e) {
    console.log(e.message);
    res.status(400).send(e.message);
  }
};

const getAllUser = async (req, res, next) => {
  try {
    const users = await Service.getAllUser();
    res.status(200).json(users);
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
};
export const Controller = {
  login: login,
  signin: signin,
  update: update,
  getAllUser,
};
