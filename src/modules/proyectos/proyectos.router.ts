import { Router } from "express";
import {
  getProyectos,
  createProyecto,
  updateProyecto,
  deleteProyecto,
} from "./proyectos.controller";

const router = Router();

// Ruta para obtener todos los proyectos
router.get("/", getProyectos);

// Ruta para crear un nuevo proyecto
router.post("/", createProyecto);

// Ruta para actualizar un proyecto
router.put("/:id", updateProyecto);

// Ruta para eliminar un proyecto
router.delete("/:id", deleteProyecto);

export default router;
