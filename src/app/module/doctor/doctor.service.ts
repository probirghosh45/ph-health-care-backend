/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from "../../lib/prisma";

const getAllDoctors = async () => {
  const doctors = await prisma.doctor.findMany({
    include: {
      user: true,
      doctorSpecialties: {
        include: {
          specialty: true,
        },
      },
    },
  });

  return doctors;
};

const getDoctorById = async (id: string) => {
  const doctor = await prisma.doctor.findUnique({
    where: {
      id,
    },
    include: {
      user: true,
      doctorSpecialties: {
        include: {
          specialty: true,
        },
      },
    },
  });
  if (!doctor) {
    throw new Error("Doctor not found");
  }
  return doctor;
};

const updateDoctor = async (id: string, payload: any) => {
  const doctor = await prisma.doctor.update({
    where: {
      id,
    },
    data: payload,
  });
  return doctor;
};

const deleteDoctor = async (id: string) => {
  const doctor = await prisma.doctor.delete({
    where: {
      id,
    },
  });
  return doctor;
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};
