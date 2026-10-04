import { Role, UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";

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

  if (!data.user) {
    throw new Error("User not found");
  }

  try {
    const patient = await prisma.$transaction(async (tx) => {
      const patientTx = await tx.patient.create({
        data: {
          userId: data.user.id,
          name: payload.name,
          email: payload.email,
        },
      });
      return patientTx;
    });

    // console.log("Patient created:", patient);
    return {
      ...data,
      patient,
    };
  } catch (error) {
    console.log("Error registering patient:", error);
  }
};

const loginPatient = async (payload: IRegisterPatientPayload) => {
  const { email, password } = payload;
  const data = await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  if (!data.user) {
    throw new Error("User not found");
  }

  return data;
};

export const AuthService = {
  registerPatient,
  loginPatient,
};
