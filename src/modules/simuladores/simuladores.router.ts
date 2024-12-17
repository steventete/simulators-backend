import { Router } from "express";
import * as simuladorController from "./simuladores.controller";

const router = Router();

router.get("/", simuladorController.getSimuladores);
router.get("/:id", simuladorController.getSimulador);
router.post("/", simuladorController.createSimulador);
router.put("/:id", simuladorController.updateSimulador);
router.delete("/:id", simuladorController.deleteSimulador);

export default router;
