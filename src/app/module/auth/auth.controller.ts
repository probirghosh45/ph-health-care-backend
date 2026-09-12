import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const registerPatient = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const data = await AuthService.registerPatient({ name, email, password });
  res.status(200).json({
    status: 200,
    success: true,
    message: "Patient Registered Successfully",
    data,
  });
};

const loginPatient = async (req: Request, res: Response) => {
const payload = req.body;
  const data = await AuthService.loginPatient(payload);
  res.status(200).json({
    status: 200,
    success: true,
    message: "Patient Logged In Successfully",
    data,
  });
};

export const AuthController = {
  registerPatient,
  loginPatient,
};
