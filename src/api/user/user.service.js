import { User } from "./user.model";

const checkUser = async (email) => {
  try {
    const user = await User.findOne({ email });
    if (user) return user;
    return null;
  } catch (err) {
    console.log(err);
    throw new Error("Can't not checked");
  }
};
const createUser = async (user) => {
  console.log("create user");
  try {
    const newUser = await User.create({ ...user });
    console.log(newUser);
    return newUser;
  } catch (err) {
    throw new Error("Not create User");
  }
};
const login = async (user) => {
  try {
    console.log("login with google");
    console.log(user);
    const userLogin = await checkUser(user.email);
    if (userLogin) {
      console.log("user exists");
      return userLogin;
    }
    console.log("user not exists");
    return createUser(user);
  } catch (err) {
    throw new Error("Can't login");
  }
};

const signin = async (user) => {
  const userSignin = await checkUser(user.email);
  if (userSignin) throw new Error("Email is exists");
  return createUser(user);
};

const loginWithPassword = async (user) => {
  const userLogin = await checkUser(user.email);
  if (!userLogin) throw new Error("Email is not exists");
  const match = await userLogin.checkPassword(user.password);
  if (!match) {
    throw new Error("Password incorrect");
  }
  return userLogin;
};

const updateById = async (userId, userInfo) => {
  const query = { _id: userId };
  console.log(userInfo);
  const updatedUser = await User.findOneAndUpdate(query, {
    ...userInfo,
  });
  console.log(updatedUser);
  return updatedUser;
};

export const Service = {
  login: login,
  signin: signin,
  loginWithPassword: loginWithPassword,
  update: updateById,
};
