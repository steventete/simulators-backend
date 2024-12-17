import { Router } from "express";
import { obtenerUsuarios, obtenerUsuarioPorId, crearUsuario } from "./usuarios.controller";

const router = Router();

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);
router.post("/", crearUsuario);

export default router;
