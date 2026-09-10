import { Router} from "express";
import { SpecialtyController } from "./specialty.controller";
const router = Router();

router.post('/specialties', SpecialtyController.createSpecialty);
router.get('/specialties', SpecialtyController.getAllSpecialty);
router.get('/specialties/:id', SpecialtyController.getSpecialtyById);
router.put('/specialties/:id', SpecialtyController.updateSpecialty);
router.delete('/specialties/:id', SpecialtyController.deleteSpecialty);
export const SpecialtyRoute = router;
