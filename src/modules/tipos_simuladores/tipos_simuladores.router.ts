import { Router } from "express";
import * as tipoSimuladorController from "./tipos_simuladores.controller";

const router = Router();

// Obtener todos los tipos de simuladores
router.get("/", tipoSimuladorController.getTiposSimuladores);

// Obtener un tipo de simulador por ID
router.get("/:id", tipoSimuladorController.getTipoSimulador);

// Crear un nuevo tipo de simulador
router.post("/", tipoSimuladorController.createTipoSimulador);

// Actualizar un tipo de simulador
router.put("/:id", tipoSimuladorController.updateTipoSimulador);

// Eliminar un tipo de simulador
router.delete("/:id", tipoSimuladorController.deleteTipoSimulador);

export default router;
