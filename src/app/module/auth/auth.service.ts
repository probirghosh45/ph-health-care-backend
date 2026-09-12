import { Role, UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";

interface IRegisterPatientPayload {
  name: string;
  email: string;
  password: string;
}

const registerPatient = async (payload: IRegisterPatientPayload) => {
  const { name, email, password } = payload;
  const data = await auth.api.signUpEmail({
    body: {
      name,
      email,
      password,
      role: Role.PATIENT,
      status: UserStatus.ACTIVE,
    },
  });

  if(!data.user){
    throw new Error("User not found");
  }

  return data;
};

const loginPatient = async (payload: IRegisterPatientPayload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if(!data.user){
    throw new Error("User not found");
  }

  return data;
};  

export const AuthService = {
  registerPatient,
  loginPatient,
};
