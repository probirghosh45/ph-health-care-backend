import { Router } from "express";
import { SpecialtyRoute } from "../module/specialty/specialty.route";
import { AuthRoute } from "../module/auth/auth.route";

const router = Router();
router.use("/specialties", SpecialtyRoute);
router.use("/auth", AuthRoute);

export const IndexRoutes = router;
