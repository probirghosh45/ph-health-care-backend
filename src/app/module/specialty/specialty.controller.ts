import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = catchAsync(async (req: Request, res: Response) => {
  const Payload = req.body;
  const specialty = await SpecialtyService.createSpecialty(Payload);
  sendResponse(res, {
    httpStatusCode: status.CREATED,
    success: true,
    message: "Specialty created successfully",
    data: specialty,
  });
});

const getAllSpecialty = catchAsync(async (req: Request, res: Response) => {
  const specialties = await SpecialtyService.getAllSpecialty();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialties retrieved successfully",
    data: specialties,
  });
});

const getSpecialtyById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.getSpecialtyById(String(id));
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty retrieved successfully",
    data: specialty,
  });
});

const updateSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const Payload = req.body;
  const specialty = await SpecialtyService.updateSpecialty(String(id), Payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty updated successfully",
    data: specialty,
  });
});

const deleteSpecialty = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const specialty = await SpecialtyService.deleteSpecialty(String(id));
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Specialty deleted successfully",
    data: specialty,
  });
});

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialty,
  getSpecialtyById,
  updateSpecialty,
  deleteSpecialty,
};
