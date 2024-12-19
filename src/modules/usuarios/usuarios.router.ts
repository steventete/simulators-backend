import { Router } from "express";
import { obtenerUsuarios, obtenerUsuarioPorId, crearUsuario, obtenerInfoBasicaUsuario } from "./usuarios.controller";

const router = Router();

router.get("/", obtenerUsuarios);
router.get("/:id", obtenerUsuarioPorId);
router.get("/usuario/:id", obtenerInfoBasicaUsuario);
router.post("/", crearUsuario);

export default router;
