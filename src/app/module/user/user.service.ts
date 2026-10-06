import { Role, Specialty, UserStatus } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { ICreateDoctorPayload } from "./user.interface";

const createDoctor = async (payload: ICreateDoctorPayload) => {
  const specialties: Specialty[] = [];

  for (const specialtyId of payload.specialties) {
    const specialty = await prisma.specialty.findUnique({
      where: {
        id: specialtyId,
      },
    });

    if (!specialty) {
      throw new Error("Specialty not found");
    }
    specialties.push(specialty);
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email: payload.doctor.email,
    },
  });

  if (userExists) {
    throw new Error("User with this email already exists");
  }

  const userData = await auth.api.signUpEmail({
    body: {
      name: payload.doctor.name,
      email: payload.doctor.email,
      password: payload.password,
      role: Role.DOCTOR,
      status: UserStatus.ACTIVE
    },
  });
  if (!userData.user) {
    throw new Error("User not found");
  }

  try {
    const doctor = await prisma.$transaction(async (tx) => {
      const doctorTx = await tx.doctor.create({
        data: {
          userId: userData.user.id,
          name: payload.doctor.name,
          email: payload.doctor.email,
          profilePhoto: payload.doctor.profilePhoto,
          contactNumber: payload.doctor.contactNumber,
          address: payload.doctor.address,
          isDeleted: payload.doctor.isDeleted,
          deletedAt: payload.doctor.deletedAt,
          createdAt: payload.doctor.createdAt,
          updatedAt: payload.doctor.updatedAt,
          registrationNumber: payload.doctor.registrationNumber,
          experience: payload.doctor.experience,
          gender: payload.doctor.gender,
          appointmentFee: payload.doctor.appointmentFee,
          qualifications: payload.doctor.qualifications,
          currentWorkingArea: payload.doctor.currentWorkingArea,
          designation: payload.doctor.designation,
        },
      });
      return doctorTx;
    });
    return doctor;
  } catch (error) {
    console.log("Error creating doctor:", error);
  }
};

export const UserService = {
  createDoctor,
};
