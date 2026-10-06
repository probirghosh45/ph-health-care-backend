import z from "zod";
import { Gender } from "../../../generated/prisma/enums";

export const createDoctorValidationSchema = z.object({
  password: z
    .string("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),

  doctor: z.object({
    name: z
      .string("Name is required")
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be at most 50 characters"),

    email: z.string("Email is required"),

    profilePhoto: z
      .string("Profile photo is required")
      .min(2, "Profile photo must be at least 2 characters")
      .max(50, "Profile photo must be at most 50 characters"),

    contactNumber: z
      .string("Contact number is required")
      .min(11, "Contact number must be at least 11 characters")
      .max(14, "Contact number must be at most 14 characters"),

    address: z
      .string("Address is required")
      .min(2, "Address must be at least 2 characters")
      .max(50, "Address must be at most 50 characters"),

    registrationNumber: z
      .string("Registration number is required")
      .startsWith("BMDC", "Registration number must start with BMDC")
      .min(11, "Registration number must be at least 11 characters")
      .max(14, "Registration number must be at most 14 characters"),

    experience: z
      .number("Experience is required")
      .nonnegative("Experience must be a non-negative number")
      .optional(),

    gender: z.enum(
      [Gender.MALE, Gender.FEMALE, Gender.OTHER],
      "Gender is required",
    ),

    appointmentFee: z
      .number("Appointment fee is required")
      .nonnegative("Appointment fee must be a non-negative number"),

    qualifications: z
      .string("Qualifications are required")
      .min(2, "Qualifications must be at least 2 characters")
      .max(50, "Qualifications must be at most 50 characters"),

    currentWorkingArea: z
      .string("Current working area is required")
      .min(2, "Current working area must be at least 2 characters")
      .max(50, "Current working area must be at most 50 characters"),

    designation: z
      .string("Designation is required")
      .min(2, "Designation must be at least 2 characters")
      .max(50, "Designation must be at most 50 characters"),
  }),
  specialties: z.array(
    z.string().min(1, "Specialty must be at least 1 character"),
    "Specialties are required",
  ),
});
