import { Gender } from "../../../generated/prisma/enums";

export interface ICreateDoctorPayload {
  password: string;
  doctor: {
    name: string;
    email: string;
    password: string;
    profilePhoto: string;
    contactNumber: string;
    address: string;
    isDeleted: boolean;
    deletedAt: Date;
    createdAt: Date;
    updatedAt: Date;
    registrationNumber: string;
    experience: number;
    gender: Gender;
    appointmentFee: number;
    qualifications: string;
    currentWorkingArea: string;
    designation: string;
  };
  specialties: [];
}
