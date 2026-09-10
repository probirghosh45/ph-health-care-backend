import { Specialty } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (Payload: Specialty): Promise<Specialty> => {
  const specialty = await prisma.specialty.create({
    data: Payload,
  });
  return specialty;
};

const getAllSpecialty = async (): Promise<Specialty[]> => {
  const specialty = await prisma.specialty.findMany();
  return specialty;
};

const getSpecialtyById = async (id: string): Promise<Specialty | null> => {
  const specialty = await prisma.specialty.findUnique({
    where: {
      id: id,
    },
  });
  return specialty;
};

const updateSpecialty = async (
  id: string,
  payload: Specialty,
): Promise<Specialty> => {
  const specialty = await prisma.specialty.update({
    where: {
      id: id,
    },
    data: payload,
  });
  return specialty;
};

const deleteSpecialty = async (id: string): Promise<Specialty> => {
  const specialty = await prisma.specialty.delete({
    where: {
      id: id,
    },
  });
  return specialty;
};

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
