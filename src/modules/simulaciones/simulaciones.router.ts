import { Router } from "express";
import * as simulacionController from "./simulaciones.controller";

const router = Router();

// Rutas para obtener simulaciones
router.get("/", simulacionController.getSimulaciones);

// Ruta para obtener una simulación por ID
router.get("/:id", simulacionController.getSimulacion);

// Ruta para crear una nueva simulación
router.post("/", simulacionController.createSimulacion);

// Ruta para actualizar una simulación
router.put("/:id", simulacionController.updateSimulacion);

// Ruta para eliminar una simulación
router.delete("/:id", simulacionController.deleteSimulacion);

export default router;
