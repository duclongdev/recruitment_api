import { Employee } from "./employee.model";

const signin = async (data) => {
  try {
    const emailCompany = data.emailCompany;
    console.log(emailCompany);
    const employee = await Employee.findOne({ emailCompany });
    if (employee) throw new Error("Email is exits");
    else return createEmploy(data);
  } catch (e) {
    throw new Error("Email is exits");
  }
};

const createEmploy = async (data) => {
  try {
    const newEmployee = await Employee.create({ ...data });
    return newEmployee;
  } catch (err) {
    console.log(err);
    throw new Error("Can't create new Employee");
  }
};

const login = async (account) => {
  const emailCompany = account.email;
  console.log(emailCompany);
  const employee = await Employee.findOne({ emailCompany });
  console.log(employee);
  if (!employee) throw new Error("Email is not exists");
  if (employee.password !== account.password)
    throw new Error("Password incorrect");
  return employee;
};

export const EmployeeService = {
  signin: signin,
  login: login,
};
