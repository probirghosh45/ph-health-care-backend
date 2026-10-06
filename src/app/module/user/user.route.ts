import { Router} from "express";
import { UserController } from "./user.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { createDoctorValidationSchema } from "./user.validation";
const router = Router();

router.post('/create-doctor', 
    validateRequest(createDoctorValidationSchema),
    UserController.createDoctor);

export const UserRoutes = router;
