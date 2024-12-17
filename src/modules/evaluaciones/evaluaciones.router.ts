import { Router } from "express";
import * as evaluacionController from "./evaluaciones.controller";

const router = Router();

router.get("/", evaluacionController.getEvaluaciones);
router.get("/:id", evaluacionController.getEvaluacion);
router.post("/", evaluacionController.createEvaluacion);
router.put("/:id", evaluacionController.updateEvaluacion);
router.delete("/:id", evaluacionController.deleteEvaluacion);

export default router;
