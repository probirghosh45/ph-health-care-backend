import { Request, Response } from 'express';
import { SpecialtyService } from './specialty.service';

const createSpecialty = async (req: Request, res: Response) => {
      const Payload = req.body;
      const specialty = await SpecialtyService.createSpecialty(Payload);
   res.status(201).json({
        success : true,
        message : "Specialty created successfully",
        data : specialty
   });
};

const getAllSpecialty = async (req:Request,res:Response) => {
    const specialties = await SpecialtyService.getAllSpecialty();
    res.status(200).json({
        success : true,
        message : "Specialties retrieved successfully",
        data : specialties
    });
}

const getSpecialtyById = async (req:Request, res: Response)=>{
    const {id} = req.params;
    const specialty = await SpecialtyService.getSpecialtyById(String(id));
    res.status(200).json({
        success : true,
        message : "Specialty retrieved successfully",
        data : specialty
    });
}

const updateSpecialty = async (req:Request, res: Response) =>{
    const { id } = req.params;
    const Payload = req.body;
    const specialty = await SpecialtyService.updateSpecialty(String(id), Payload);
    res.status(200).json({
        success : true,
        message : "Specialty updated successfully",
        data : specialty
    });
}

const deleteSpecialty = async (req:Request, res: Response) =>{
    const { id } = req.params;
    const specialty = await SpecialtyService.deleteSpecialty(String(id));
    res.status(200).json({
        success : true,
        message : "Specialty deleted successfully",
        data : specialty
    }); 
}


export const SpecialtyController = {
    createSpecialty,
    getAllSpecialty,
    getSpecialtyById,
    updateSpecialty,
    deleteSpecialty
}