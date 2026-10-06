import { Request, Response } from "express";
import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { DoctorService } from "./doctor.service";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const doctors = await DoctorService.getAllDoctors();
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "All doctors fetched successfully",
    data: doctors,
  });
});

const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const doctor = await DoctorService.getDoctorById(id);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor fetched successfully",
    data: doctor,
  });
});

const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const payload = req.body;
  const doctor = await DoctorService.updateDoctor(id, payload);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor updated successfully",
    data: doctor,
  });
})

const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const id = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
  const doctor = await DoctorService.deleteDoctor(id);
  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor deleted successfully",
    data: doctor,
  });
})

export const DoctorController = {
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor
};
